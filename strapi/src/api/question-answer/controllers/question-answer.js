'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::question-answer.question-answer', ({ strapi }) => ({

  async find(ctx) {
  const entries = await strapi.documents('api::question-answer.question-answer').findMany({
    populate: '*',
    filters: {
      publishedAt: { $notNull: true },   // ✅ only published
    },
  });
  return entries;
},


  async findOne(ctx) {
    const { documentId } = ctx.params;

    const entry = await strapi.documents('api::question-answer.question-answer').findOne({
      documentId,
      populate: '*',
      status: 'published',   // ✅ only published doc
    });
    return entry;
  }

}));
