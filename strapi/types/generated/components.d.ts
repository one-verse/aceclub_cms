import type { Schema, Struct } from "@strapi/strapi";

export interface DynamicZoneBlogSection extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_blog_sections";
  info: {
    displayName: "BlogSection";
    icon: "archive";
  };
  attributes: {
    blogs: Schema.Attribute.Relation<"oneToMany", "api::blog.blog">;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface DynamicZoneCarousel extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_carousels";
  info: {
    description: "";
    displayName: "carousel";
  };
  attributes: {
    slides: Schema.Attribute.Component<"shared.slide", true>;
  };
}

export interface DynamicZoneCategoriesGrid extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_categories_grids";
  info: {
    displayName: "CategoriesGrid";
    icon: "connector";
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      "oneToMany",
      "api::category.category"
    >;
    sectionDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    sectionTitle: Schema.Attribute.Text;
    tags: Schema.Attribute.Relation<"oneToMany", "api::tag.tag">;
  };
}

export interface DynamicZoneContentBlock extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_content_blocks";
  info: {
    displayName: "ContentBlock";
    icon: "paint";
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
  };
}

export interface DynamicZoneFaqSection extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_faq_sections";
  info: {
    description: "";
    displayName: "FAQSection";
    icon: "cursor";
  };
  attributes: {
    question_answers: Schema.Attribute.Relation<
      "oneToMany",
      "api::question-answer.question-answer"
    >;
    sectionTitle: Schema.Attribute.Text;
  };
}

export interface DynamicZoneMegaSection extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_mega_sections";
  info: {
    description: "";
    displayName: "MegaSection";
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    PlayButton: Schema.Attribute.Component<"shared.cta", false>;
    RHSImage: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    title: Schema.Attribute.Text;
    variant: Schema.Attribute.Enumeration<["pink", "green", "theme"]>;
  };
}

export interface DynamicZoneTraitsGrid extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_traits_grids";
  info: {
    description: "";
    displayName: "TraitsGrid";
    icon: "crown";
  };
  attributes: {
    sectionDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    sectionTitle: Schema.Attribute.Text;
    traits: Schema.Attribute.Component<"shared.trait", true>;
  };
}

export interface DynamicZoneWhyChooseUs extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_why_chooseuses";
  info: {
    description: "";
    displayName: "WhyChooseUs";
  };
  attributes: {
    sectionDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    sectionTitle: Schema.Attribute.Text;
    traits: Schema.Attribute.Component<"shared.trait", true>;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: "components_seo_seos";
  info: {
    description: "";
    displayName: "seo";
    icon: "cursor";
  };
  attributes: {
    canonicalURL: Schema.Attribute.Text;
    headHTML: Schema.Attribute.Text;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<"images">;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: "components_shared_ctas";
  info: {
    description: "";
    displayName: "CTA";
    icon: "cursor";
  };
  attributes: {
    link: Schema.Attribute.Text;
    socialIcon: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    target: Schema.Attribute.Enumeration<
      ["_self", "_blank", "_top", "_parent"]
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: "components_shared_footers";
  info: {
    description: "";
    displayName: "FooterNav";
  };
  attributes: {
    footerCopyRight: Schema.Attribute.Text;
    footerLogo: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    footerNavItems: Schema.Attribute.Component<"shared.nav-items", false>;
    footerText: Schema.Attribute.Text;
    footerWarning: Schema.Attribute.Text;
    socialLinks: Schema.Attribute.Component<"shared.nav-items", false>;
    usefullLinks: Schema.Attribute.Component<"shared.nav-items", false>;
  };
}

export interface SharedNavItems extends Struct.ComponentSchema {
  collectionName: "components_shared_nav_items";
  info: {
    description: "";
    displayName: "NavItems";
    icon: "exit";
  };
  attributes: {
    items: Schema.Attribute.Component<"shared.cta", true>;
    NavRHS: Schema.Attribute.Component<"shared.cta", true>;
  };
}

export interface SharedQuestions extends Struct.ComponentSchema {
  collectionName: "components_shared_questions";
  info: {
    displayName: "Questions";
    icon: "filter";
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    question: Schema.Attribute.Text;
  };
}

export interface SharedSlide extends Struct.ComponentSchema {
  collectionName: "components_shared_slides";
  info: {
    description: "";
    displayName: "slide";
    icon: "landscape";
  };
  attributes: {
    cta: Schema.Attribute.Component<"shared.cta", false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    desktopImage: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    mobileImage: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.Text;
  };
}

export interface SharedTrait extends Struct.ComponentSchema {
  collectionName: "components_shared_traits";
  info: {
    description: "";
    displayName: "trait";
    icon: "cursor";
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    icon: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "dynamic-zone.blog-section": DynamicZoneBlogSection;
      "dynamic-zone.carousel": DynamicZoneCarousel;
      "dynamic-zone.categories-grid": DynamicZoneCategoriesGrid;
      "dynamic-zone.content-block": DynamicZoneContentBlock;
      "dynamic-zone.faq-section": DynamicZoneFaqSection;
      "dynamic-zone.mega-section": DynamicZoneMegaSection;
      "dynamic-zone.traits-grid": DynamicZoneTraitsGrid;
      "dynamic-zone.why-choose-us": DynamicZoneWhyChooseUs;
      "seo.seo": SeoSeo;
      "shared.cta": SharedCta;
      "shared.footer": SharedFooter;
      "shared.nav-items": SharedNavItems;
      "shared.questions": SharedQuestions;
      "shared.slide": SharedSlide;
      "shared.trait": SharedTrait;
    }
  }
}
