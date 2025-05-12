'use strict';

/**
 * Run all seeds in the correct order
 * Run with: NODE_ENV=development npm run strapi -- seed:run --name=run-all-seeds
 */

module.exports = {
  /**
   * Seed Function to run all seeds in sequence
   */
  async run({ strapi }) {
    try {
      console.log('Starting all seeds in sequence...');

      // Import all seed modules
      const seedEVBrands = require('./ev-brands');
      const seedEVModels = require('./ev-models');
      const seedTags = require('./tags');
      const seedAuthors = require('./authors');
      const seedNewsletterSubscribers = require('./newsletter-subscribers');
      const seedReviewArticles = require('./review-articles');
      const seedMoreReviewArticles = require('./review-articles-more');

      // Run seeds in order
      console.log('\n===== RUNNING EV BRANDS SEED =====');
      await seedEVBrands.run({ strapi });

      console.log('\n===== RUNNING EV MODELS SEED =====');
      await seedEVModels.run({ strapi });

      console.log('\n===== RUNNING TAGS SEED =====');
      await seedTags.run({ strapi });

      console.log('\n===== RUNNING AUTHORS SEED =====');
      await seedAuthors.run({ strapi });

      console.log('\n===== RUNNING NEWSLETTER SUBSCRIBERS SEED =====');
      await seedNewsletterSubscribers.run({ strapi });

      console.log('\n===== RUNNING REVIEW ARTICLES SEED =====');
      await seedReviewArticles.run({ strapi });

      console.log('\n===== RUNNING ADDITIONAL REVIEW ARTICLES SEED =====');
      await seedMoreReviewArticles.run({ strapi });

      console.log('\n✅ ALL SEEDS COMPLETED SUCCESSFULLY!');
    } catch (error) {
      console.error('\n❌ ERROR RUNNING SEEDS:', error);
    }
  }
}; 
