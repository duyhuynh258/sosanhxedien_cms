'use strict';

/**
 * EV Brands seed data
 * Run with: NODE_ENV=development npm run strapi -- seed:run --name=ev-brands
 */

module.exports = {
  /**
   * Seed Function for EVBrands
   */
  async run({ strapi }) {
    // Define your brands
    const brands = [
      {
        name: "VinFast",
        website: "vinfast.vn",
        country: "Việt Nam",
        description: "VinFast is a Vietnamese automotive manufacturer established in 2017 as a subsidiary of Vingroup. The company focuses on electric vehicles with a commitment to sustainable mobility solutions."
      },
      {
        name: "Tesla",
        website: "tesla.com",
        country: "Mỹ",
        description: "Tesla, Inc. is an American electric vehicle and clean energy company founded in 2003. Tesla designs and manufactures electric cars, battery energy storage, solar panels and solar roof tiles, and related products and services."
      },
      {
        name: "BYD",
        website: "byd.com",
        country: "Trung Quốc",
        description: "BYD Co Ltd is a Chinese manufacturing company that produces automobiles, battery-powered bicycles, buses, trucks, forklifts, solar panels, rechargeable batteries, and more."
      },
      {
        name: "Hyundai",
        website: "hyundai.com",
        country: "Hàn Quốc",
        description: "Hyundai Motor Company is a South Korean multinational automotive manufacturer founded in 1967. Hyundai has expanded into electric vehicles with its dedicated IONIQ sub-brand."
      },
      {
        name: "Kia",
        website: "kia.com",
        country: "Hàn Quốc",
        description: "Kia Corporation is South Korea's second-largest automobile manufacturer. Kia has been focusing on electric mobility with its EV lineup including the EV6 and other models."
      },
      {
        name: "Audi",
        website: "audi.com",
        country: "Đức",
        description: "Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi's e-tron lineup represents their electric vehicle initiatives."
      },
      {
        name: "BMW",
        website: "bmw.com",
        country: "Đức",
        description: "BMW (Bayerische Motoren Werke AG) is a German multinational company which produces luxury vehicles and motorcycles. BMW's electric vehicles are part of their 'i' sub-brand."
      },
      {
        name: "Mercedes-Benz",
        website: "mercedes-benz.com",
        country: "Đức",
        description: "Mercedes-Benz is a German global automobile marque and a division of Daimler AG. Mercedes-Benz is known for luxury vehicles, vans, trucks, and now electric vehicles under the EQ product brand."
      }
    ];

    // Create entries for each brand
    for (const brand of brands) {
      try {
        // Check if brand already exists
        const existingBrands = await strapi.entityService.findMany('api::ev-brand.ev-brand', {
          filters: { name: brand.name }
        });

        if (existingBrands.length === 0) {
          await strapi.entityService.create('api::ev-brand.ev-brand', {
            data: {
              ...brand,
              publishedAt: new Date()
            }
          });
          console.log(`Created brand: ${brand.name}`);
        } else {
          console.log(`Brand already exists: ${brand.name}`);
        }
      } catch (error) {
        console.error(`Error creating brand ${brand.name}:`, error);
      }
    }

    console.log('EV Brands seed completed');
  }
}; 
 