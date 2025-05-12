'use strict';

/**
 * Additional Review Articles seed data
 * Run with: NODE_ENV=development npm run strapi -- seed:run --name=review-articles-more
 * Note: Run authors, tags, ev-models, and review-articles seeds first
 */

module.exports = {
  /**
   * Seed Function for Additional Review Articles
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

    // Define more review articles
    const reviewArticles = [
      {
        title: "Đánh giá Hyundai IONIQ 5: Công nghệ vượt trội trong tầm giá",
        excerpt: "Bài đánh giá chi tiết Hyundai IONIQ 5 - mẫu crossover điện với nhiều công nghệ tiên tiến và thiết kế độc đáo.",
        content: `# Đánh giá Hyundai IONIQ 5

Hyundai IONIQ 5 là một trong những mẫu xe điện được chờ đợi nhất tại thị trường Việt Nam. Với thiết kế retro-futuristic độc đáo và nhiều công nghệ tiên tiến, IONIQ 5 đang trở thành đối thủ đáng gờm trong phân khúc crossover điện.

## Thiết kế ngoại thất

IONIQ 5 gây ấn tượng với thiết kế pixel LED đặc trưng ở cả đèn trước và sau. Thân xe với những đường nét góc cạnh nhưng vẫn có độ khí động học cao. Mâm xe 20 inch với thiết kế tham khảo từ bánh xe của những chiếc Hyundai Pony đời đầu làm tăng thêm vẻ retro cho xe.

## Không gian nội thất

Điểm mạnh lớn nhất của IONIQ 5 là không gian nội thất rộng rãi nhờ nền tảng E-GMP dành riêng cho xe điện. Khoảng cách giữa hai trục xe lên đến 3,000mm - tương đương với một chiếc SUV cỡ lớn như Hyundai Palisade. Điều này mang đến không gian để chân cực kỳ thoải mái cho hàng ghế sau.

## Công nghệ

IONIQ 5 được trang bị hai màn hình 12.3 inch đặt cạnh nhau, tạo thành một mặt phẳng liền mạch cho cụm đồng hồ và hệ thống thông tin giải trí. Xe hỗ trợ Apple CarPlay và Android Auto không dây, cùng nhiều tính năng hỗ trợ lái tiên tiến như hỗ trợ giữ làn, kiểm soát hành trình thích ứng, và cảnh báo điểm mù.

## Vận hành

Phiên bản cao cấp của IONIQ 5 tại Việt Nam được trang bị hai động cơ điện với tổng công suất 302 mã lực và mô-men xoắn 605 Nm, cho khả năng tăng tốc 0-100 km/h trong khoảng 5.2 giây. Pin 72.6 kWh cho phạm vi hoạt động khoảng 481 km theo chuẩn WLTP. Đặc biệt, xe hỗ trợ sạc nhanh 800V, cho phép sạc từ 10% đến 80% chỉ trong khoảng 18 phút với bộ sạc DC 350 kW.

## Kết luận

Với mức giá từ 1,35 tỷ đồng, Hyundai IONIQ 5 mang đến nhiều giá trị với công nghệ tiên tiến, không gian rộng rãi và khả năng vận hành mạnh mẽ. Đây là lựa chọn đáng cân nhắc cho những người tìm kiếm một chiếc xe điện thực dụng nhưng vẫn đậm chất công nghệ.`,
        publish_date: new Date('2023-07-05'),
        slug: "danh-gia-hyundai-ioniq-5",
        is_featured: false,
        view_count: 1580,
        authorName: "Đỗ Anh Tuấn",
        tagNames: ["Xe điện đô thị", "Xe điện hạng sang"],
        modelNames: ["Hyundai IONIQ 5"]
      },
      {
        title: "BYD Atto 3 - Lựa chọn xe điện dưới 1 tỷ đồng tốt nhất?",
        excerpt: "Đánh giá chi tiết BYD Atto 3 - mẫu SUV điện Trung Quốc đang làm mưa làm gió tại thị trường Việt Nam với mức giá hấp dẫn.",
        content: `# BYD Atto 3 - Lựa chọn xe điện phổ thông tốt nhất?

BYD Atto 3 đang là một trong những mẫu xe điện bán chạy nhất tại Việt Nam nhờ mức giá cạnh tranh và nhiều tính năng hấp dẫn. Liệu đây có phải là chiếc xe điện dưới 1 tỷ đồng tốt nhất hiện nay?

## Thiết kế và ngoại hình

BYD Atto 3 sở hữu thiết kế hiện đại với nhiều đường nét mềm mại. Kích thước tổng thể 4,455 x 1,875 x 1,615 mm (DxRxC) và chiều dài cơ sở 2,720 mm mang đến không gian khá rộng rãi cho một mẫu SUV hạng C. Đầu xe với cụm đèn LED sắc nét và lưới tản nhiệt đóng kín đặc trưng của xe điện, trong khi đuôi xe nổi bật với dải đèn LED liền mạch theo xu hướng thiết kế hiện đại.

## Nội thất và tiện nghi

Nội thất của Atto 3 gây ấn tượng với màn hình cảm ứng 12.8 inch có thể xoay ngang hoặc dọc - một tính năng độc đáo trong phân khúc. Các chi tiết nội thất lấy cảm hứng từ phòng tập gym với những đường nét uốn lượn và các chi tiết mô phỏng dây đàn guitar mang đến cảm giác trẻ trung, khác biệt.

Xe được trang bị khá đầy đủ tiện nghi như ghế lái chỉnh điện 6 hướng, sạc điện thoại không dây, hệ thống âm thanh 8 loa, cửa sổ trời toàn cảnh, và điều hòa tự động.

## Vận hành và phạm vi hoạt động

BYD Atto 3 sử dụng một động cơ điện với công suất 201 mã lực và mô-men xoắn 310 Nm, đi kèm với bộ pin LFP Blade 60.48 kWh cho quãng đường di chuyển lên đến 410 km theo chuẩn WLTP. Xe hỗ trợ sạc nhanh DC 80 kW, cho phép sạc từ 30% lên 80% trong khoảng 30 phút.

Trải nghiệm lái của Atto 3 khá êm ái với khả năng cách âm tốt, phù hợp với điều kiện giao thông đô thị. Tuy nhiên, hệ thống treo hơi cứng có thể khiến người dùng chưa quen khi di chuyển trên đường gồ ghề.

## Tính năng an toàn

BYD Atto 3 được trang bị gói an toàn khá đầy đủ với 7 túi khí, các hệ thống an toàn chủ động như hỗ trợ giữ làn, cảnh báo điểm mù, cảnh báo va chạm phía trước, phanh tự động khẩn cấp và kiểm soát hành trình thích ứng.

## Giá bán và chi phí sở hữu

Với mức giá niêm yết 730 triệu đồng, BYD Atto 3 đang là một trong những mẫu xe điện rẻ nhất trong phân khúc SUV/Crossover, rẻ hơn đáng kể so với các đối thủ như VinFast VF e34 hay Kia EV6. Chi phí sử dụng hàng tháng cũng khá thấp nhờ chi phí sạc điện tiết kiệm và ít chi phí bảo dưỡng hơn so với xe động cơ đốt trong.

## Kết luận

BYD Atto 3 là một lựa chọn đáng cân nhắc cho những người muốn chuyển sang sử dụng xe điện với chi phí hợp lý. Xe sở hữu nhiều ưu điểm về thiết kế, trang bị và vận hành, mặc dù vẫn còn một số hạn chế về mạng lưới trạm sạc và dịch vụ hậu mãi tại Việt Nam. Với mức giá dưới 800 triệu đồng, đây có thể coi là một trong những lựa chọn xe điện tốt nhất hiện nay cho người tiêu dùng Việt.`,
        publish_date: new Date('2023-09-10'),
        slug: "byd-atto-3-lua-chon-xe-dien-duoi-1-ty-dong-tot-nhat",
        is_featured: false,
        view_count: 1720,
        authorName: "Lê Thị Hương",
        tagNames: ["Xe điện giá rẻ", "Xe SUV điện", "Hướng dẫn mua xe điện"],
        modelNames: ["BYD Atto 3"]
      },
      {
        title: "Hướng dẫn toàn tập về mua xe điện tại Việt Nam năm 2023",
        excerpt: "Tất tần tật những điều cần biết khi mua xe điện tại Việt Nam: từ chi phí, thủ tục, đến cách chọn mẫu xe phù hợp.",
        content: `# Hướng dẫn toàn tập về mua xe điện tại Việt Nam năm 2023

Thị trường xe điện tại Việt Nam đang phát triển nhanh chóng với ngày càng nhiều mẫu xe và thương hiệu xuất hiện. Bài viết này sẽ cung cấp cho bạn những thông tin cần thiết để đưa ra quyết định đúng đắn khi mua xe điện tại Việt Nam.

## Lợi ích của việc sử dụng xe điện

### Tiết kiệm chi phí vận hành
Chi phí sạc điện thấp hơn nhiều so với chi phí nhiên liệu cho xe xăng/diesel, đặc biệt trong bối cảnh giá xăng dầu tăng cao. Chi phí sạc xe điện chỉ khoảng 1/3 so với chi phí xăng cho quãng đường tương đương.

### Bảo dưỡng ít hơn
Xe điện có ít chi tiết chuyển động hơn xe động cơ đốt trong, do đó giảm chi phí và tần suất bảo dưỡng. Không cần thay dầu động cơ, bộ lọc, bugi đánh lửa, dây đai timing...

### Thân thiện với môi trường
Không phát thải khí độc hại trực tiếp, giúp giảm ô nhiễm không khí tại các đô thị lớn.

### Ưu đãi từ chính phủ
Được miễn phí trước bạ (tiết kiệm từ 10-12% giá trị xe), và có thể có thêm các ưu đãi khác trong tương lai khi Chính phủ đẩy mạnh phát triển xe điện.

## Những yếu tố cần cân nhắc khi mua xe điện

### Phạm vi hoạt động (quãng đường di chuyển)
Đây là yếu tố quan trọng nhất. Hãy xác định nhu cầu sử dụng hàng ngày của bạn và chọn xe có phạm vi hoạt động phù hợp. Ví dụ:
- Di chuyển nội đô: 200-300km/lần sạc là đủ
- Di chuyển liên tỉnh thường xuyên: nên chọn xe có phạm vi từ 400km trở lên

### Hạ tầng sạc
Kiểm tra mạng lưới trạm sạc của hãng xe tại khu vực bạn sống và những nơi bạn thường di chuyển. VinFast hiện có mạng lưới trạm sạc rộng khắp nhất tại Việt Nam.

### Giá xe và chi phí sở hữu
Ngoài giá mua xe ban đầu, cần tính đến:
- Chi phí thuê pin hàng tháng (nếu có)
- Chi phí lắp đặt trạm sạc tại nhà
- Chi phí sạc điện hàng tháng
- Chi phí bảo hiểm

### Thời gian sạc
Xe điện thường có hai cách sạc:
- Sạc AC (tại nhà): thường mất 6-8 giờ để sạc đầy
- Sạc nhanh DC (tại trạm sạc công cộng): có thể sạc từ 10% lên 80% trong 30-60 phút tùy mẫu xe

## Các mẫu xe điện phổ biến tại Việt Nam năm 2023

### Phân khúc dưới 1 tỷ đồng
- VinFast VF e34: 690 triệu đồng (chưa bao gồm pin)
- BYD Atto 3: 730 triệu đồng

### Phân khúc 1-2 tỷ đồng
- VinFast VF 8: từ 1,26 tỷ đồng (chưa bao gồm pin)
- Hyundai IONIQ 5: từ 1,35 tỷ đồng
- Tesla Model 3: từ 1,3 tỷ đồng
- Kia EV6: từ 1,45 tỷ đồng

### Phân khúc trên 2 tỷ đồng
- VinFast VF 9: từ 1,89 tỷ đồng (chưa bao gồm pin)
- Tesla Model Y: từ 1,5 tỷ đồng
- Audi e-tron: từ 2,5 tỷ đồng
- Mercedes EQC: từ 2,9 tỷ đồng

## Quy trình mua xe điện tại Việt Nam

1. **Nghiên cứu và chọn mẫu xe**: So sánh các mẫu xe, đọc đánh giá và lái thử
2. **Xác định phương thức sở hữu**: Mua trọn gói hay mua xe + thuê pin (với VinFast)
3. **Chuẩn bị nơi sạc xe**: Lắp đặt bộ sạc tại nhà hoặc xác định các trạm sạc gần nhà
4. **Hoàn tất thủ tục mua xe**: Đặt cọc, ký hợp đồng, đăng ký xe
5. **Hướng dẫn sử dụng**: Tham gia các buổi hướng dẫn sử dụng xe điện từ đại lý

## Kết luận

Việc chuyển sang sử dụng xe điện là xu hướng tất yếu trong tương lai. Với thị trường đang phát triển nhanh chóng tại Việt Nam, người tiêu dùng có ngày càng nhiều lựa chọn với đa dạng mức giá và phân khúc. Hy vọng bài viết này giúp bạn có cái nhìn toàn diện hơn về việc mua và sử dụng xe điện tại Việt Nam.`,
        publish_date: new Date('2023-05-25'),
        slug: "huong-dan-toan-tap-ve-mua-xe-dien-tai-viet-nam-nam-2023",
        is_featured: true,
        view_count: 3650,
        authorName: "Phạm Văn Minh",
        tagNames: ["Hướng dẫn mua xe điện", "Tin tức xe điện"],
        modelNames: []
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

    console.log('Additional Review Articles seed completed');
  }
} 
