/**
 * `deepPopulate` middleware
 */

const contentTypes = require("@strapi/utils").contentTypes;
const pluralize = require("pluralize");

const { CREATED_BY_ATTRIBUTE, UPDATED_BY_ATTRIBUTE } = contentTypes.constants;

const extractPathSegment = (url) => url.match(/\/([^/?]+)(?:\?|$)/)?.[1] || "";

const getDeepPopulate = (uid, opts = {}) => {
  const model = strapi.getModel(uid);
  const attributes = Object.entries(model.attributes);

  return attributes.reduce((acc, [attributeName, attribute]) => {
    switch (attribute.type) {
      case "relation": {
        const isMorphRelation = attribute.relation
          .toLowerCase()
          .startsWith("morph");
        if (isMorphRelation) {
          break;
        }

        // Ignore not visible fields other than createdBy and updatedBy
        const isVisible = contentTypes.isVisibleAttribute(model, attributeName);
        const isCreatorField = [
          CREATED_BY_ATTRIBUTE,
          UPDATED_BY_ATTRIBUTE,
        ].includes(attributeName);

        if (isVisible) {
          if (attributeName === "testimonials") {
            acc[attributeName] = { populate: "user.image" };
          } else {
            acc[attributeName] = { populate: "*" };
          }
        }

        break;
      }

      case "media": {
        acc[attributeName] = { populate: "*" };
        break;
      }

      case "component": {
        const populate = getDeepPopulate(attribute.component, opts);
        acc[attributeName] = { populate };
        break;
      }

      case "dynamiczone": {
        // Use fragments to populate the dynamic zone components
        const populatedComponents = (attribute.components || []).reduce(
          (acc, componentUID) => {
            acc[componentUID] = {
              populate: getDeepPopulate(componentUID, opts),
            };

            return acc;
          },
          {},
        );

        acc[attributeName] = { on: populatedComponents };
        break;
      }
      default:
        break;
    }

    return acc;
  }, {});
};

// export default (config, { strapi }) => {
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (
      ctx.request.url.startsWith("/api/") &&
      ctx.request.method === "GET" &&
      !ctx.query.populate
    ) {
      strapi.log.info("Using custom Dynamic-Zone population Middleware...");

      const excludeURLs = [
        "/api/users/me",
        "/api/auth/local",
        "/api/payments",
        "/api/trials",
        "/api/otp/phone/forgotPassVerify",
      ];
      // Check if the current URL matches any in the exclude list
      if (excludeURLs.some((url) => ctx.request.url.startsWith(url))) {
        console.group("\n === asdlkfkldsj ===");
        console.log("yes i came here");
        console.groupEnd();
      } else {
        // Handle non-matching URLs (optional)
        console.log("URL not excluded:", ctx.request.url);
        const contentType = extractPathSegment(ctx.request.url);
        const singular = pluralize.singular(contentType);
        const uid = `api::${singular}.${singular}`;

        // @ts-ignores
        ctx.query.populate = getDeepPopulate(uid);
        // Continue to the next middleware (or block if needed)
      }
    }
    await next();
  };
};
