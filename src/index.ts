// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {
    // Uncomment the following code to run all seeds on bootstrap
    // This is useful for development or when deploying to a new environment

    /*
    const seedEVBrands = require('./seeds/ev-brands');
    const seedEVModels = require('./seeds/ev-models');
    const seedTags = require('./seeds/tags');
    const seedAuthors = require('./seeds/authors');
    const seedNewsletterSubscribers = require('./seeds/newsletter-subscribers');
    const seedReviewArticles = require('./seeds/review-articles');
    const seedMoreReviewArticles = require('./seeds/review-articles-more');

    async function runAllSeeds(strapi) {
      try {
        console.log('Starting seeds on bootstrap...');
        
        await seedEVBrands.run({ strapi });
        await seedEVModels.run({ strapi });
        await seedTags.run({ strapi });
        await seedAuthors.run({ strapi });
        await seedNewsletterSubscribers.run({ strapi });
        await seedReviewArticles.run({ strapi });
        await seedMoreReviewArticles.run({ strapi });
        
        console.log('All bootstrap seeds completed successfully!');
      } catch (error) {
        console.error('Error running bootstrap seeds:', error);
      }
    }

    // Enable this only for development or initial deployment
    if (process.env.NODE_ENV === 'development' && process.env.RUN_SEEDS === 'true') {
      runAllSeeds(strapi);
    }
    */
  },
};
