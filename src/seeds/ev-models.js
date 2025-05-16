'use strict';

/**
 * EV Models seed data
 * Run with: NODE_ENV=development npm run strapi -- seed:run --name=ev-models
 * Note: Run ev-brands seed first to create the brand references
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');

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

    // Helper function to download an image if URL is provided
    const downloadImage = async (imageUrl, modelName) => {
      try {
        if (!imageUrl) return null;

        // Sanitize model name for filename
        const sanitizedName = modelName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        const imageDir = path.join(__dirname, '../../public/uploads/temp');
        const imageFilename = `${sanitizedName}-${Date.now()}.jpg`;
        const imagePath = path.join(imageDir, imageFilename);

        // Create directory if it doesn't exist
        if (!fs.existsSync(imageDir)) {
          fs.mkdirSync(imageDir, { recursive: true });
        }

        // Download the image
        const response = await axios({
          method: 'GET',
          url: imageUrl,
          responseType: 'stream',
        });

        // Save the image
        const writer = fs.createWriteStream(imagePath);
        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
          writer.on('finish', async () => {
            try {
              // Upload to Strapi Media Library
              const file = fs.createReadStream(imagePath);
              file.name = imageFilename;

              const uploadedImage = await strapi.plugins.upload.services.upload.upload({
                data: {},
                files: {
                  path: imagePath,
                  name: imageFilename,
                  type: 'image/jpeg',
                  size: fs.statSync(imagePath).size,
                },
              });

              // Clean up temp file
              fs.unlinkSync(imagePath);

              resolve(uploadedImage[0].id);
            } catch (error) {
              console.error(`Error uploading image for ${modelName}:`, error);
              resolve(null);
            }
          });
          writer.on('error', () => {
            console.error(`Error downloading image for ${modelName}`);
            resolve(null);
          });
        });
      } catch (error) {
        console.error(`Error processing image for ${modelName}:`, error.message);
        return null;
      }
    };

    // Define your models with specifications using component structure
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
        imageUrl: "https://vinfastotovietnam.com.vn/wp-content/uploads/2023/05/vfe34-gray.png",
        specifications: [
          {
            section_title: "Performance",
            specs: [
              { label: "Acceleration (0-100 km/h)", value: "8.5s", is_highlighted: true },
              { label: "Top Speed", value: "145 km/h", is_highlighted: false },
              { label: "Power", value: "110 kW (147 hp)", is_highlighted: true },
              { label: "Torque", value: "242 Nm", is_highlighted: false },
              { label: "Drive Type", value: "FWD", is_highlighted: false }
            ]
          },
          {
            section_title: "Dimensions",
            specs: [
              { label: "Dimensions (L×W×H)", value: "4,300 × 1,793 × 1,613 mm", is_highlighted: false },
              { label: "Wheelbase", value: "2,611 mm", is_highlighted: false },
              { label: "Ground Clearance", value: "180 mm", is_highlighted: false },
              { label: "Weight", value: "1,490 kg", is_highlighted: false }
            ]
          },
          {
            section_title: "Interior",
            specs: [
              { label: "Seating Capacity", value: "5", is_highlighted: true },
              { label: "Cargo Volume", value: "530 L", is_highlighted: false }
            ]
          },
          {
            section_title: "Warranty",
            specs: [
              { label: "Warranty", value: "10 years / 200,000 km", is_highlighted: true }
            ]
          }
        ]
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
        imageUrl: "https://vinfastauto.com/sites/default/files/styles/images_1440_x_623/public/2022-10/VinFast-VF-8-exterior-nguon-goc-ten-VinFast-header.jpg",
        specifications: [
          {
            section_title: "Performance",
            specs: [
              { label: "Acceleration (0-100 km/h)", value: "5.9s", is_highlighted: true },
              { label: "Top Speed", value: "200 km/h", is_highlighted: false },
              { label: "Power", value: "300 kW (402 hp)", is_highlighted: true },
              { label: "Torque", value: "620 Nm", is_highlighted: false },
              { label: "Drive Type", value: "AWD", is_highlighted: false }
            ]
          },
          {
            section_title: "Dimensions",
            specs: [
              { label: "Dimensions (L×W×H)", value: "4,750 × 1,900 × 1,660 mm", is_highlighted: false },
              { label: "Wheelbase", value: "2,950 mm", is_highlighted: false },
              { label: "Ground Clearance", value: "198 mm", is_highlighted: false },
              { label: "Weight", value: "2,150 kg", is_highlighted: false }
            ]
          },
          {
            section_title: "Interior",
            specs: [
              { label: "Seating Capacity", value: "5", is_highlighted: true },
              { label: "Cargo Volume", value: "580 L", is_highlighted: false }
            ]
          },
          {
            section_title: "Warranty",
            specs: [
              { label: "Warranty", value: "10 years / 200,000 km", is_highlighted: true }
            ]
          }
        ]
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
        imageUrl: "https://vinfaststores.com/wp-content/uploads/2023/04/vf9-silver-1-min-scaled.jpeg",
        specifications: [
          {
            section_title: "Performance",
            specs: [
              { label: "Acceleration (0-100 km/h)", value: "6.5s", is_highlighted: true },
              { label: "Top Speed", value: "200 km/h", is_highlighted: false },
              { label: "Power", value: "300 kW (402 hp)", is_highlighted: true },
              { label: "Torque", value: "620 Nm", is_highlighted: false },
              { label: "Drive Type", value: "AWD", is_highlighted: false }
            ]
          },
          {
            section_title: "Dimensions",
            specs: [
              { label: "Dimensions (L×W×H)", value: "5,120 × 2,000 × 1,721 mm", is_highlighted: false },
              { label: "Wheelbase", value: "3,150 mm", is_highlighted: false },
              { label: "Ground Clearance", value: "192 mm", is_highlighted: false },
              { label: "Weight", value: "2,470 kg", is_highlighted: false }
            ]
          },
          {
            section_title: "Interior",
            specs: [
              { label: "Seating Capacity", value: "7", is_highlighted: true },
              { label: "Cargo Volume", value: "645 L", is_highlighted: false }
            ]
          },
          {
            section_title: "Warranty",
            specs: [
              { label: "Warranty", value: "10 years / 200,000 km", is_highlighted: true }
            ]
          }
        ]
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
        imageUrl: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png",
        specifications: [
          {
            section_title: "Performance",
            specs: [
              { label: "Acceleration (0-100 km/h)", value: "3.3s", is_highlighted: true },
              { label: "Top Speed", value: "225 km/h", is_highlighted: false },
              { label: "Power", value: "239 kW (320 hp)", is_highlighted: true },
              { label: "Torque", value: "450 Nm", is_highlighted: false },
              { label: "Drive Type", value: "RWD", is_highlighted: false }
            ]
          },
          {
            section_title: "Dimensions",
            specs: [
              { label: "Dimensions (L×W×H)", value: "4,694 × 1,849 × 1,443 mm", is_highlighted: false },
              { label: "Wheelbase", value: "2,875 mm", is_highlighted: false },
              { label: "Ground Clearance", value: "140 mm", is_highlighted: false },
              { label: "Weight", value: "1,830 kg", is_highlighted: false }
            ]
          },
          {
            section_title: "Interior",
            specs: [
              { label: "Seating Capacity", value: "5", is_highlighted: true },
              { label: "Cargo Volume", value: "649 L", is_highlighted: false }
            ]
          },
          {
            section_title: "Warranty",
            specs: [
              { label: "Warranty", value: "4 years / 80,000 km", is_highlighted: true },
              { label: "Battery Warranty", value: "8 years / 192,000 km", is_highlighted: true }
            ]
          }
        ]
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
        imageUrl: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png",
        specifications: [
          {
            section_title: "Performance",
            specs: [
              { label: "Acceleration (0-100 km/h)", value: "3.7s", is_highlighted: true },
              { label: "Top Speed", value: "217 km/h", is_highlighted: false },
              { label: "Power", value: "358 kW (480 hp)", is_highlighted: true },
              { label: "Torque", value: "639 Nm", is_highlighted: false },
              { label: "Drive Type", value: "AWD", is_highlighted: false }
            ]
          },
          {
            section_title: "Dimensions",
            specs: [
              { label: "Dimensions (L×W×H)", value: "4,751 × 1,921 × 1,624 mm", is_highlighted: false },
              { label: "Wheelbase", value: "2,890 mm", is_highlighted: false },
              { label: "Ground Clearance", value: "168 mm", is_highlighted: false },
              { label: "Weight", value: "1,995 kg", is_highlighted: false }
            ]
          },
          {
            section_title: "Interior",
            specs: [
              { label: "Seating Capacity", value: "5", is_highlighted: true },
              { label: "Cargo Volume", value: "854 L", is_highlighted: false }
            ]
          },
          {
            section_title: "Warranty",
            specs: [
              { label: "Warranty", value: "4 years / 80,000 km", is_highlighted: true },
              { label: "Battery Warranty", value: "8 years / 192,000 km", is_highlighted: true }
            ]
          }
        ]
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
        imageUrl: "https://ev-database.org/img/auto/BYD_Atto_3/BYD_Atto_3-01@2x.jpg",
        specifications: [
          {
            section_title: "Performance",
            specs: [
              { label: "Acceleration (0-100 km/h)", value: "7.3s", is_highlighted: true },
              { label: "Top Speed", value: "160 km/h", is_highlighted: false },
              { label: "Power", value: "150 kW (201 hp)", is_highlighted: true },
              { label: "Torque", value: "310 Nm", is_highlighted: false },
              { label: "Drive Type", value: "FWD", is_highlighted: false }
            ]
          },
          {
            section_title: "Dimensions",
            specs: [
              { label: "Dimensions (L×W×H)", value: "4,455 × 1,875 × 1,615 mm", is_highlighted: false },
              { label: "Wheelbase", value: "2,720 mm", is_highlighted: false },
              { label: "Ground Clearance", value: "175 mm", is_highlighted: false },
              { label: "Weight", value: "1,750 kg", is_highlighted: false }
            ]
          },
          {
            section_title: "Interior",
            specs: [
              { label: "Seating Capacity", value: "5", is_highlighted: true },
              { label: "Cargo Volume", value: "440 L", is_highlighted: false }
            ]
          },
          {
            section_title: "Warranty",
            specs: [
              { label: "Warranty", value: "6 years / 150,000 km", is_highlighted: true },
              { label: "Battery Warranty", value: "8 years / 160,000 km", is_highlighted: true }
            ]
          }
        ]
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
        imageUrl: "https://assets.whichcar.com.au/image/upload/s--ZEWht_gK--/c_fill,f_auto,q_auto:good/c_scale,w_1200/v1/archive/whichcar/2021/04/22/-1/Hyundai-Ioniq-5-pricing-news.jpg",
        specifications: [
          {
            section_title: "Performance",
            specs: [
              { label: "Acceleration (0-100 km/h)", value: "5.2s", is_highlighted: true },
              { label: "Top Speed", value: "185 km/h", is_highlighted: false },
              { label: "Power", value: "225 kW (302 hp)", is_highlighted: true },
              { label: "Torque", value: "605 Nm", is_highlighted: false },
              { label: "Drive Type", value: "AWD", is_highlighted: false }
            ]
          },
          {
            section_title: "Dimensions",
            specs: [
              { label: "Dimensions (L×W×H)", value: "4,635 × 1,890 × 1,605 mm", is_highlighted: false },
              { label: "Wheelbase", value: "3,000 mm", is_highlighted: false },
              { label: "Ground Clearance", value: "160 mm", is_highlighted: false },
              { label: "Weight", value: "2,100 kg", is_highlighted: false }
            ]
          },
          {
            section_title: "Interior",
            specs: [
              { label: "Seating Capacity", value: "5", is_highlighted: true },
              { label: "Cargo Volume", value: "527 L", is_highlighted: false }
            ]
          },
          {
            section_title: "Warranty",
            specs: [
              { label: "Warranty", value: "5 years / 100,000 km", is_highlighted: true },
              { label: "Battery Warranty", value: "8 years / 160,000 km", is_highlighted: true }
            ]
          }
        ]
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
        imageUrl: "https://www.kia.com/content/dam/kwcms/au/en/images/vehicles/resolve/ev6-gt/my24/hero/kia-ev6-gt-my24-led-headlights-and-daytime-running-lights-with-startup-animation-extended-m.jpg",
        specifications: [
          {
            section_title: "Performance",
            specs: [
              { label: "Acceleration (0-100 km/h)", value: "5.2s", is_highlighted: true },
              { label: "Top Speed", value: "188 km/h", is_highlighted: false },
              { label: "Power", value: "239 kW (320 hp)", is_highlighted: true },
              { label: "Torque", value: "605 Nm", is_highlighted: false },
              { label: "Drive Type", value: "AWD", is_highlighted: false }
            ]
          },
          {
            section_title: "Dimensions",
            specs: [
              { label: "Dimensions (L×W×H)", value: "4,695 × 1,890 × 1,550 mm", is_highlighted: false },
              { label: "Wheelbase", value: "2,900 mm", is_highlighted: false },
              { label: "Ground Clearance", value: "150 mm", is_highlighted: false },
              { label: "Weight", value: "2,090 kg", is_highlighted: false }
            ]
          },
          {
            section_title: "Interior",
            specs: [
              { label: "Seating Capacity", value: "5", is_highlighted: true },
              { label: "Cargo Volume", value: "490 L", is_highlighted: false }
            ]
          },
          {
            section_title: "Warranty",
            specs: [
              { label: "Warranty", value: "7 years / 150,000 km", is_highlighted: true },
              { label: "Battery Warranty", value: "7 years / 150,000 km", is_highlighted: true }
            ]
          }
        ]
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

        // Remove the brandName and imageUrl properties as they're not needed in the model data
        const { brandName, imageUrl, specifications, ...modelData } = model;

        // Try to download and create the image
        let imageId = null;
        if (imageUrl) {
          console.log(`Downloading image for ${model.model_name}...`);
          imageId = await downloadImage(imageUrl, model.model_name);
          console.log(`Image processed for ${model.model_name}: ${imageId ? 'Success' : 'Failed'}`);
        }

        // Check if model already exists
        const existingModels = await strapi.entityService.findMany('api::ev-model.ev-model', {
          filters: { slug: model.slug }
        });

        if (existingModels.length === 0) {
          // Create the model with specifications
          await strapi.entityService.create('api::ev-model.ev-model', {
            data: {
              ...modelData,
              brand: brand.id, // Reference the brand ID
              specifications: specifications,
              image: imageId, // Reference the image ID if available
              publishedAt: new Date()
            }
          });
          console.log(`Created model: ${model.model_name}`);
        } else {
          // Update the existing model with the new specifications structure
          await strapi.entityService.update('api::ev-model.ev-model', existingModels[0].id, {
            data: {
              specifications: specifications,
              image: imageId || existingModels[0].image, // Keep existing image if new one failed
            }
          });
          console.log(`Updated model: ${model.model_name}`);
        }
      } catch (error) {
        console.error(`Error creating/updating model ${model.model_name}:`, error);
      }
    }

    console.log('EV Models seed completed');
  }
}; 
