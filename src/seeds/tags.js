'use strict';

/**
 * Tags seed data
 * Run with: NODE_ENV=development npm run strapi -- seed:run --name=tags
 */

module.exports = {
  /**
   * Seed Function for Tags
   */
  async run({ strapi }) {
    // Define your tags
    const tags = [
      {
        name: "Xe SUV điện",
        slug: "xe-suv-dien",
        description: "Các bài đánh giá và so sánh về xe SUV điện"
      },
      {
        name: "Xe Sedan điện",
        slug: "xe-sedan-dien",
        description: "Các bài đánh giá và so sánh về xe Sedan điện"
      },
      {
        name: "Xe điện giá rẻ",
        slug: "xe-dien-gia-re",
        description: "Các bài đánh giá về xe điện có mức giá phải chăng dưới 1 tỷ đồng"
      },
      {
        name: "Xe điện hạng sang",
        slug: "xe-dien-hang-sang",
        description: "Các bài đánh giá về xe điện cao cấp và hạng sang"
      },
      {
        name: "Xe điện đô thị",
        slug: "xe-dien-do-thi",
        description: "Các bài đánh giá về xe điện phù hợp cho việc di chuyển trong đô thị"
      },
      {
        name: "Tin tức xe điện",
        slug: "tin-tuc-xe-dien",
        description: "Các bài viết cập nhật tin tức mới nhất về xe điện"
      },
      {
        name: "So sánh xe điện",
        slug: "so-sanh-xe-dien",
        description: "Các bài viết so sánh giữa các mẫu xe điện"
      },
      {
        name: "Hướng dẫn mua xe điện",
        slug: "huong-dan-mua-xe-dien",
        description: "Các bài viết hướng dẫn và tư vấn mua xe điện"
      }
    ];

    // Create entries for each tag
    for (const tag of tags) {
      try {
        // Check if tag already exists
        const existingTags = await strapi.entityService.findMany('api::tag.tag', {
          filters: { slug: tag.slug }
        });

        if (existingTags.length === 0) {
          await strapi.entityService.create('api::tag.tag', {
            data: {
              ...tag,
              publishedAt: new Date()
            }
          });
          console.log(`Created tag: ${tag.name}`);
        } else {
          console.log(`Tag already exists: ${tag.name}`);
        }
      } catch (error) {
        console.error(`Error creating tag ${tag.name}:`, error);
      }
    }

    console.log('Tags seed completed');
  }
} 
