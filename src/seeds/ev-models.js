'use strict';

/**
 * EV Models seed data
 * Run with: NODE_ENV=development npm run strapi -- seed:run --name=ev-models
 * Note: Run ev-brands seed first to create the brand references
 */

module.exports = {
  /**
   * Seed Function for EVModels
   */
  async run({ strapi }) {
    // Get all brands to establish relationships
    const brands = await strapi.entityService.findMany('api::ev-brand.ev-brand', {});

    // Helper function to find a brand by name
    const findBrandByName = (name) => {
      return brands.find(brand => brand.name === name);
    };

    // Define your models
    const models = [
      {
        model_name: "VinFast VF e34",
        brandName: "VinFast",
        year: "2023",
        price_vnd: 690000000,
        range_km: 285,
        battery_kwh: 42,
        charge_time: "8h (AC) / 1.5h (DC)",
        description: "VinFast VF e34 là mẫu SUV điện cỡ nhỏ đầu tiên của VinFast, được trang bị động cơ điện công suất 110 kW, mô-men xoắn 242 Nm.",
        slug: "vinfast-vf-e34",
        speed: 145
      },
      {
        model_name: "VinFast VF 8",
        brandName: "VinFast",
        year: "2023",
        price_vnd: 1260000000,
        range_km: 420,
        battery_kwh: 82,
        charge_time: "10h (AC) / 1h (DC)",
        description: "VinFast VF 8 là mẫu SUV điện cỡ trung của VinFast, được trang bị hai động cơ điện với tổng công suất 300 kW, mô-men xoắn 620 Nm.",
        slug: "vinfast-vf-8",
        speed: 200
      },
      {
        model_name: "VinFast VF 9",
        brandName: "VinFast",
        year: "2023",
        price_vnd: 1890000000,
        range_km: 438,
        battery_kwh: 92,
        charge_time: "11h (AC) / 1.2h (DC)",
        description: "VinFast VF 9 là mẫu SUV điện cỡ lớn của VinFast, được trang bị hai động cơ điện với tổng công suất 300 kW, mô-men xoắn 620 Nm.",
        slug: "vinfast-vf-9",
        speed: 200
      },
      {
        model_name: "Tesla Model 3",
        brandName: "Tesla",
        year: "2023",
        price_vnd: 1300000000,
        range_km: 576,
        battery_kwh: 60,
        charge_time: "8h (AC) / 0.5h (DC)",
        description: "Tesla Model 3 là mẫu sedan điện cỡ trung của Tesla, được trang bị động cơ điện công suất 239 kW, mô-men xoắn 450 Nm.",
        slug: "tesla-model-3",
        speed: 225
      },
      {
        model_name: "Tesla Model Y",
        brandName: "Tesla",
        year: "2023",
        price_vnd: 1500000000,
        range_km: 533,
        battery_kwh: 75,
        charge_time: "10h (AC) / 0.5h (DC)",
        description: "Tesla Model Y là mẫu SUV điện cỡ trung của Tesla, được trang bị động cơ điện công suất 239 kW, mô-men xoắn 450 Nm.",
        slug: "tesla-model-y",
        speed: 217
      },
      {
        model_name: "BYD Atto 3",
        brandName: "BYD",
        year: "2023",
        price_vnd: 730000000,
        range_km: 410,
        battery_kwh: 60,
        charge_time: "9h (AC) / 1h (DC)",
        description: "BYD Atto 3 là mẫu SUV điện cỡ nhỏ của BYD, được trang bị động cơ điện công suất 150 kW, mô-men xoắn 310 Nm.",
        slug: "byd-atto-3",
        speed: 160
      },
      {
        model_name: "Hyundai IONIQ 5",
        brandName: "Hyundai",
        year: "2023",
        price_vnd: 1350000000,
        range_km: 481,
        battery_kwh: 72.6,
        charge_time: "7h (AC) / 0.3h (DC)",
        description: "Hyundai IONIQ 5 là mẫu crossover điện với thiết kế retro-futuristic độc đáo, được trang bị công nghệ sạc nhanh 800V và không gian nội thất rộng rãi.",
        slug: "hyundai-ioniq-5",
        speed: 185
      },
      {
        model_name: "Kia EV6",
        brandName: "Kia",
        year: "2023",
        price_vnd: 1450000000,
        range_km: 499,
        battery_kwh: 77.4,
        charge_time: "7h (AC) / 0.3h (DC)",
        description: "Kia EV6 là mẫu crossover điện thể thao với thiết kế hiện đại, được trang bị công nghệ sạc nhanh 800V và hệ thống hỗ trợ lái tiên tiến.",
        slug: "kia-ev6",
        speed: 188
      }
    ];

    // Create entries for each model
    for (const model of models) {
      try {
        // Find the brand for this model
        const brand = findBrandByName(model.brandName);
        if (!brand) {
          console.log(`Brand not found for model ${model.model_name}: ${model.brandName}`);
          continue;
        }

        // Remove the brandName property as it's not needed in the model data
        const { brandName, ...modelData } = model;

        // Check if model already exists
        const existingModels = await strapi.entityService.findMany('api::ev-model.ev-model', {
          filters: { slug: model.slug }
        });

        if (existingModels.length === 0) {
          await strapi.entityService.create('api::ev-model.ev-model', {
            data: {
              ...modelData,
              brand: brand.id, // Reference the brand ID
              publishedAt: new Date()
            }
          });
          console.log(`Created model: ${model.model_name}`);
        } else {
          console.log(`Model already exists: ${model.model_name}`);
        }
      } catch (error) {
        console.error(`Error creating model ${model.model_name}:`, error);
      }
    }

    console.log('EV Models seed completed');
  }
}; 
