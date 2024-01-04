
module.exports = () => ({
    'content-source-map': {
      enabled: true,
      config: {
        contentTypes: ['api::article.article', 'api::restaurant.restaurant'],
        origin: 'strapi.io',
        baseHref: 'https://my.strapi-admin-review.com',
      },
    },
  });