'use strict';

/**
 * Authors seed data
 * Run with: NODE_ENV=development npm run strapi -- seed:run --name=authors
 */

module.exports = {
  /**
   * Seed Function for Authors
   */
  async run({ strapi }) {
    // Define your authors
    const authors = [
      {
        name: "Trần Quốc Bảo",
        bio: "Chuyên gia đánh giá xe điện với hơn 10 năm kinh nghiệm trong ngành ô tô. Tốt nghiệp Đại học Bách Khoa TP.HCM chuyên ngành Kỹ thuật ô tô.",
        email: "baotq@xedienreview.vn",
        social_media_links: JSON.stringify({
          facebook: "https://facebook.com/tranquocbao",
          twitter: "https://twitter.com/baotq",
          linkedin: "https://linkedin.com/in/tranquocbao"
        })
      },
      {
        name: "Nguyễn Minh Đức",
        bio: "Kỹ sư điện tử và là người đam mê công nghệ xanh. Chuyên viết bài đánh giá chi tiết về công nghệ trên xe điện và trải nghiệm lái.",
        email: "ducnm@xedienreview.vn",
        social_media_links: JSON.stringify({
          facebook: "https://facebook.com/nguyenminhduc",
          twitter: "https://twitter.com/ducnm",
          linkedin: "https://linkedin.com/in/nguyenminhduc"
        })
      },
      {
        name: "Lê Thị Hương",
        bio: "Nhà báo với hơn 8 năm kinh nghiệm viết về thị trường ô tô Việt Nam. Chuyên gia phân tích xu hướng tiêu dùng và đánh giá từ góc độ người dùng.",
        email: "huonglt@xedienreview.vn",
        social_media_links: JSON.stringify({
          facebook: "https://facebook.com/lethihuong",
          twitter: "https://twitter.com/huonglt",
          instagram: "https://instagram.com/huonglt"
        })
      },
      {
        name: "Phạm Văn Minh",
        bio: "Chuyên gia tư vấn tài chính và phân tích giá trị đầu tư xe điện. Có kinh nghiệm làm việc trong lĩnh vực tư vấn tài chính ô tô.",
        email: "minhpv@xedienreview.vn",
        social_media_links: JSON.stringify({
          facebook: "https://facebook.com/phamvanminh",
          linkedin: "https://linkedin.com/in/phamvanminh",
          youtube: "https://youtube.com/c/phamvanminh"
        })
      },
      {
        name: "Đỗ Anh Tuấn",
        bio: "Kỹ thuật viên cao cấp và là người đam mê xe điện. Chuyên viết về các vấn đề kỹ thuật, bảo dưỡng và chăm sóc xe điện.",
        email: "tuanda@xedienreview.vn",
        social_media_links: JSON.stringify({
          facebook: "https://facebook.com/doanhtuan",
          youtube: "https://youtube.com/c/doanhtuan",
          tiktok: "https://tiktok.com/@doanhtuan"
        })
      }
    ];

    // Create entries for each author
    for (const author of authors) {
      try {
        // Check if author already exists
        const existingAuthors = await strapi.entityService.findMany('api::author.author', {
          filters: { email: author.email }
        });

        if (existingAuthors.length === 0) {
          await strapi.entityService.create('api::author.author', {
            data: {
              ...author,
              publishedAt: new Date()
            }
          });
          console.log(`Created author: ${author.name}`);
        } else {
          console.log(`Author already exists: ${author.name}`);
        }
      } catch (error) {
        console.error(`Error creating author ${author.name}:`, error);
      }
    }

    console.log('Authors seed completed');
  }
} 
