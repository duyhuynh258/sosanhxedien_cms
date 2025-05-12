'use strict';

/**
 * Newsletter Subscribers seed data
 * Run with: NODE_ENV=development npm run strapi -- seed:run --name=newsletter-subscribers
 */

module.exports = {
  /**
   * Seed Function for Newsletter Subscribers
   */
  async run({ strapi }) {
    // Define your subscribers
    const subscribers = [
      {
        email: "subscriber1@example.com",
        name: "Nguyễn Văn A",
        active: true
      },
      {
        email: "subscriber2@example.com",
        name: "Trần Thị B",
        active: true
      },
      {
        email: "subscriber3@example.com",
        name: "Lê Văn C",
        active: true
      },
      {
        email: "subscriber4@example.com",
        name: "Phạm Thị D",
        active: false
      },
      {
        email: "subscriber5@example.com",
        name: "Hoàng Văn E",
        active: true
      },
      {
        email: "subscriber6@example.com",
        name: "Vũ Thị F",
        active: true
      },
      {
        email: "subscriber7@example.com",
        name: "Đặng Văn G",
        active: true
      },
      {
        email: "subscriber8@example.com",
        name: "Bùi Thị H",
        active: false
      },
      {
        email: "subscriber9@example.com",
        name: "Ngô Văn I",
        active: true
      },
      {
        email: "subscriber10@example.com",
        name: "Dương Thị K",
        active: true
      }
    ];

    // Create entries for each subscriber
    for (const subscriber of subscribers) {
      try {
        // Check if subscriber already exists
        const existingSubscribers = await strapi.entityService.findMany('api::newsletter-subscriber.newsletter-subscriber', {
          filters: { email: subscriber.email }
        });

        if (existingSubscribers.length === 0) {
          await strapi.entityService.create('api::newsletter-subscriber.newsletter-subscriber', {
            data: subscriber
          });
          console.log(`Created subscriber: ${subscriber.email}`);
        } else {
          console.log(`Subscriber already exists: ${subscriber.email}`);
        }
      } catch (error) {
        console.error(`Error creating subscriber ${subscriber.email}:`, error);
      }
    }

    console.log('Newsletter Subscribers seed completed');
  }
} 
