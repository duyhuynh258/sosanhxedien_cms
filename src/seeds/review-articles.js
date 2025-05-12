'use strict';

/**
 * Review Articles seed data
 * Run with: NODE_ENV=development npm run strapi -- seed:run --name=review-articles
 * Note: Run authors, tags, and ev-models seeds first to create the references
 */

module.exports = {
  /**
   * Seed Function for Review Articles
   */
  async run({ strapi }) {
    // Get all authors, tags, and models to establish relationships
    const authors = await strapi.entityService.findMany('api::author.author', {});
    const tags = await strapi.entityService.findMany('api::tag.tag', {});
    const evModels = await strapi.entityService.findMany('api::ev-model.ev-model', {});

    // Helper functions to find references by name/slug
    const findAuthorByName = (name) => {
      return authors.find(author => author.name === name);
    };

    const findTagsByNames = (tagNames) => {
      return tags.filter(tag => tagNames.includes(tag.name)).map(tag => tag.id);
    };

    const findModelsByNames = (modelNames) => {
      return evModels.filter(model => modelNames.includes(model.model_name)).map(model => model.id);
    };

    // Define your review articles
    const reviewArticles = [
      {
        title: "Đánh giá chi tiết VinFast VF 8: SUV điện đáng tiền nhất phân khúc?",
        excerpt: "Bài đánh giá chi tiết VinFast VF 8 sau hành trình 500km, phân tích ưu điểm và nhược điểm của mẫu SUV điện Việt Nam.",
        content: `# VinFast VF 8: Cảm nhận đầu tiên

VinFast VF 8 là mẫu SUV điện cỡ D của VinFast, đối thủ cạnh tranh trực tiếp với Tesla Model Y và các mẫu xe điện cùng phân khúc từ các hãng xe Trung Quốc. Sau hành trình trải nghiệm 500km từ Hà Nội đi Thanh Hóa và quay trở lại, chúng tôi có những đánh giá chi tiết về mẫu xe này.

## Thiết kế và không gian

VF 8 sở hữu thiết kế hiện đại, mang đậm ngôn ngữ thiết kế đặc trưng của VinFast với dải đèn LED hình chữ V ở phía trước. Kích thước tổng thể của xe khá lớn, mang đến không gian rộng rãi cho cả 5 người ngồi. Khoang hành lý với dung tích 566 lít cũng đáp ứng tốt nhu cầu sử dụng hàng ngày.

## Công nghệ và tính năng

Điểm nổi bật trên VF 8 là màn hình trung tâm cỡ lớn 15.6 inch, hỗ trợ kết nối Apple CarPlay/Android Auto và các tính năng thông minh khác. Xe được trang bị hệ thống hỗ trợ lái ADAS với các tính năng như hỗ trợ giữ làn, cảnh báo điểm mù, kiểm soát hành trình thích ứng...

## Vận hành

Phiên bản VF 8 Plus mà chúng tôi trải nghiệm được trang bị hai động cơ điện với tổng công suất 402 mã lực và mô-men xoắn 620 Nm, cho khả năng tăng tốc 0-100 km/h trong khoảng 5,9 giây. Pin 82 kWh cho phạm vi hoạt động khoảng 420 km theo chuẩn WLTP.

## Trải nghiệm lái

Trên đường cao tốc, VF 8 cho cảm giác lái khá êm ái, cách âm tốt và ít tiếng ồn từ động cơ điện. Khả năng tăng tốc của xe mạnh mẽ, đặc biệt ở dải tốc độ 60-100 km/h rất hữu ích khi cần vượt xe.

## Kết luận

Với mức giá từ 1,26 tỷ đồng, VinFast VF 8 là một lựa chọn đáng cân nhắc trong phân khúc SUV điện tại Việt Nam. Xe sở hữu nhiều ưu điểm về thiết kế, công nghệ và khả năng vận hành, tuy nhiên vẫn cần cải thiện một số chi tiết về chất lượng hoàn thiện và mạng lưới trạm sạc.`,
        publish_date: new Date('2023-06-15'),
        slug: "danh-gia-chi-tiet-vinfast-vf-8",
        is_featured: true,
        view_count: 1250,
        authorName: "Trần Quốc Bảo",
        tagNames: ["Xe SUV điện", "So sánh xe điện"],
        modelNames: ["VinFast VF 8"]
      },
      {
        title: "So sánh chi tiết Tesla Model 3 và VinFast VF 8: Nên chọn mẫu xe nào?",
        excerpt: "Bài so sánh chi tiết giữa Tesla Model 3 và VinFast VF 8, giúp người dùng Việt Nam có cái nhìn toàn diện khi chọn mua xe điện.",
        content: `# So sánh Tesla Model 3 và VinFast VF 8

Trong bối cảnh xe điện ngày càng phổ biến tại Việt Nam, việc lựa chọn giữa Tesla Model 3 và VinFast VF 8 là bài toán khó đối với nhiều người dùng. Bài viết này sẽ so sánh chi tiết hai mẫu xe về các khía cạnh như giá cả, tính năng, thiết kế và trải nghiệm sử dụng.

## Giá cả và chi phí sở hữu

Tesla Model 3 có giá niêm yết từ 1,3 tỷ đồng, trong khi VinFast VF 8 có giá từ 1,26 tỷ đồng (chưa bao gồm pin) hoặc từ 1,46 tỷ đồng (đã bao gồm pin). Đối với VF 8, người dùng còn có lựa chọn thuê pin với chi phí hàng tháng từ 2,8 triệu đồng với quãng đường di chuyển tối đa 3.000km/tháng.

## Thiết kế và không gian

Tesla Model 3 là sedan 4 cửa với thiết kế tối giản đặc trưng của Tesla, trong khi VF 8 là SUV 5 chỗ với kiểu dáng gầm cao đang được ưa chuộng tại Việt Nam. Về không gian, VF 8 rõ ràng rộng rãi hơn với khoang hành lý 566 lít so với 425 lít của Model 3.

## Công nghệ và tính năng

Cả hai mẫu xe đều được trang bị màn hình trung tâm cỡ lớn và nhiều tính năng thông minh. Tuy nhiên, Tesla có lợi thế về phần mềm với hệ thống Autopilot đã được phát triển và hoàn thiện qua nhiều năm, trong khi VinFast đang trong giai đoạn cải tiến liên tục.

## Hiệu suất và phạm vi hoạt động

Tesla Model 3 phiên bản tiêu chuẩn có khả năng di chuyển khoảng 576 km/lần sạc, trong khi VF 8 đạt khoảng 420 km theo chuẩn WLTP. Về mặt hiệu suất, Tesla Model 3 có khả năng tăng tốc từ 0-100 km/h trong khoảng 5,6 giây, nhỉnh hơn một chút so với 5,9 giây của VF 8 Plus.

## Mạng lưới hỗ trợ và dịch vụ

Đây là điểm mạnh của VinFast tại thị trường Việt Nam với mạng lưới showroom và trung tâm dịch vụ rộng khắp, cùng chính sách bảo hành 10 năm. Tesla hiện chưa có hiện diện chính thức tại Việt Nam, nên việc bảo dưỡng và sửa chữa có thể gặp khó khăn hơn.

## Kết luận

Lựa chọn giữa Tesla Model 3 và VinFast VF 8 phụ thuộc vào nhu cầu cá nhân của từng người dùng. Nếu ưu tiên thiết kế sedan thể thao, phần mềm tiên tiến và phạm vi hoạt động xa, Tesla Model 3 là lựa chọn phù hợp. Còn nếu cần một chiếc SUV rộng rãi với dịch vụ hậu mãi tốt tại Việt Nam, VF 8 sẽ là ứng cử viên sáng giá hơn.`,
        publish_date: new Date('2023-08-20'),
        slug: "so-sanh-chi-tiet-tesla-model-3-va-vinfast-vf-8",
        is_featured: true,
        view_count: 2100,
        authorName: "Nguyễn Minh Đức",
        tagNames: ["So sánh xe điện", "Xe SUV điện", "Xe Sedan điện"],
        modelNames: ["Tesla Model 3", "VinFast VF 8"]
      }
    ];

    // Create entries for each review article
    for (const article of reviewArticles) {
      try {
        // Find references
        const author = findAuthorByName(article.authorName);
        const tagIds = findTagsByNames(article.tagNames);
        const modelIds = findModelsByNames(article.modelNames);

        if (!author) {
          console.log(`Author not found for article: ${article.title}`);
          continue;
        }

        // Remove helper properties
        const { authorName, tagNames, modelNames, ...articleData } = article;

        // Check if article already exists
        const existingArticles = await strapi.entityService.findMany('api::review-article.review-article', {
          filters: { slug: article.slug }
        });

        if (existingArticles.length === 0) {
          await strapi.entityService.create('api::review-article.review-article', {
            data: {
              ...articleData,
              author: author.id,
              tags: tagIds,
              ev_models: modelIds,
              publishedAt: new Date()
            }
          });
          console.log(`Created review article: ${article.title}`);
        } else {
          console.log(`Review article already exists: ${article.title}`);
        }
      } catch (error) {
        console.error(`Error creating review article ${article.title}:`, error);
      }
    }

    console.log('Review Articles seed completed');
  }
} 
