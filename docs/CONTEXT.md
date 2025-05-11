### Entity-Relationship Diagram for WebSoSanhEV Strapi CMS

## Overview

This ERD outlines the data structure for a Strapi CMS implementation for WebSoSanhEV, a platform for comparing and reviewing electric vehicles. The design focuses on creating a flexible, scalable content structure that supports multilingual content (Vietnamese and English) while maintaining data integrity.

```mermaid
WebSoSanhEV ERD.download-icon {
            cursor: pointer;
            transform-origin: center;
        }
        .download-icon .arrow-part {
            transition: transform 0.35s cubic-bezier(0.35, 0.2, 0.14, 0.95);
             transform-origin: center;
        }
        button:has(.download-icon):hover .download-icon .arrow-part, button:has(.download-icon):focus-visible .download-icon .arrow-part {
          transform: translateY(-1.5px);
        }
        #mermaid-diagram-rfj5{font-family:var(--font-geist-sans);font-size:12px;fill:#000000;}#mermaid-diagram-rfj5 .error-icon{fill:#552222;}#mermaid-diagram-rfj5 .error-text{fill:#552222;stroke:#552222;}#mermaid-diagram-rfj5 .edge-thickness-normal{stroke-width:1px;}#mermaid-diagram-rfj5 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-diagram-rfj5 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-diagram-rfj5 .edge-thickness-invisible{stroke-width:0;fill:none;}#mermaid-diagram-rfj5 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-diagram-rfj5 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-diagram-rfj5 .marker{fill:#666;stroke:#666;}#mermaid-diagram-rfj5 .marker.cross{stroke:#666;}#mermaid-diagram-rfj5 svg{font-family:var(--font-geist-sans);font-size:12px;}#mermaid-diagram-rfj5 p{margin:0;}#mermaid-diagram-rfj5 .entityBox{fill:#eee;stroke:#999;}#mermaid-diagram-rfj5 .attributeBoxOdd{fill:#ffffff;stroke:#999;}#mermaid-diagram-rfj5 .attributeBoxEven{fill:#f2f2f2;stroke:#999;}#mermaid-diagram-rfj5 .relationshipLabelBox{fill:hsl(-160, 0%, 93.3333333333%);opacity:0.7;background-color:hsl(-160, 0%, 93.3333333333%);}#mermaid-diagram-rfj5 .relationshipLabelBox rect{opacity:0.5;}#mermaid-diagram-rfj5 .relationshipLine{stroke:#666;}#mermaid-diagram-rfj5 .entityTitleText{text-anchor:middle;font-size:18px;fill:#000000;}#mermaid-diagram-rfj5 #MD_PARENT_START{fill:#f5f5f5!important;stroke:#666!important;stroke-width:1;}#mermaid-diagram-rfj5 #MD_PARENT_END{fill:#f5f5f5!important;stroke:#666!important;stroke-width:1;}#mermaid-diagram-rfj5 .flowchart-link{stroke:hsl(var(--gray-400));stroke-width:1px;}#mermaid-diagram-rfj5 .marker,#mermaid-diagram-rfj5 marker,#mermaid-diagram-rfj5 marker *{fill:hsl(var(--gray-400))!important;stroke:hsl(var(--gray-400))!important;}#mermaid-diagram-rfj5 .label,#mermaid-diagram-rfj5 text,#mermaid-diagram-rfj5 text>tspan{fill:hsl(var(--black))!important;color:hsl(var(--black))!important;}#mermaid-diagram-rfj5 .background,#mermaid-diagram-rfj5 rect.relationshipLabelBox{fill:hsl(var(--white))!important;}#mermaid-diagram-rfj5 .entityBox,#mermaid-diagram-rfj5 .attributeBoxEven{fill:hsl(var(--gray-150))!important;}#mermaid-diagram-rfj5 .attributeBoxOdd{fill:hsl(var(--white))!important;}#mermaid-diagram-rfj5 .label-container,#mermaid-diagram-rfj5 rect.actor{fill:hsl(var(--white))!important;stroke:hsl(var(--gray-400))!important;}#mermaid-diagram-rfj5 line{stroke:hsl(var(--gray-400))!important;}#mermaid-diagram-rfj5 :root{--mermaid-font-family:var(--font-geist-sans);}EVBranduuididPKstringnamestringlogostringwebsitestringcountrystringdescriptiondatetimecreated_atdatetimeupdated_atEVModeluuididPKstringmodel_nameuuidbrand_idFKstringyearnumberprice_vndnumberrange_kmnumberbattery_kwhstringcharge_timestringimagestringdescriptionstringslugnumberaccelerationstringtop_speedstringpowerstringtorquestringdrive_typestringseating_capacitystringdimensionsstringwheelbasestringground_clearancestringweightstringcargo_volumestringwarrantydatetimecreated_atdatetimeupdated_atReviewArticleuuididPKstringtitlestringexcerpttextcontentdatetimepublish_datestringfeatured_imageuuidauthor_idFKnumberview_countstringslugbooleanis_featureddatetimecreated_atdatetimeupdated_atAuthoruuididPKstringnamestringavatartextbiostringemailstringsocial_media_linksdatetimecreated_atdatetimeupdated_atTaguuididPKstringnamestringslugstringdescriptiondatetimecreated_atdatetimeupdated_atNewsletterSubscriberuuididPKstringemailstringnamebooleanactivedatetimecreated_atdatetimeupdated_atEVModel_ReviewArticleuuididPKuuidev_model_idFKuuidreview_article_idFKReviewArticle_TaguuididPKuuidreview_article_idFKuuidtag_idFKmanufacturesfeatured_inwritescategorizes
```

## Entity Descriptions

### 1. EVBrand

Represents electric vehicle manufacturers.

**Attributes:**

- `id`: UUID, Primary Key
- `name`: String, required (e.g., "VinFast", "Tesla")
- `logo`: Media (image), optional
- `website`: String, optional (e.g., "vinfast.vn")
- `country`: String, optional (e.g., "Việt Nam", "USA")
- `description`: Text, optional


**i18n Fields:** `name`, `description`

**Relationships:**

- One-to-Many with EVModel (one brand can have many models)


### 2. EVModel

Represents specific electric vehicle models.

**Attributes:**

- `id`: UUID, Primary Key
- `model_name`: String, required (e.g., "VF 8", "Model 3")
- `brand_id`: UUID, Foreign Key to EVBrand
- `year`: String, required (e.g., "2023")
- `price_vnd`: Number, required (price in Vietnamese Dong)
- `range_km`: Number, required (range in kilometers)
- `battery_kwh`: Number, required (battery capacity in kWh)
- `charge_time`: String, required (e.g., "8h (AC) / 1.5h (DC)")
- `image`: Media (image), optional
- `description`: Text, required
- `slug`: String, required, unique (for URL routing)
- `acceleration`: String, optional (e.g., "5.9 giây")
- `top_speed`: String, optional (e.g., "200 km/h")
- `power`: String, optional (e.g., "300 kW (402 HP)")
- `torque`: String, optional (e.g., "620 Nm")
- `drive_type`: String, optional (e.g., "AWD", "FWD")
- `seating_capacity`: String, optional (e.g., "5", "7")
- `dimensions`: String, optional (e.g., "4.750 x 1.900 x 1.660 mm")
- `wheelbase`: String, optional (e.g., "2.950 mm")
- `ground_clearance`: String, optional (e.g., "190 mm")
- `weight`: String, optional (e.g., "2.050 kg")
- `cargo_volume`: String, optional (e.g., "580 lít")
- `warranty`: String, optional (e.g., "10 năm / 200.000 km")


**i18n Fields:** `model_name`, `description`, `charge_time`, and all optional specification fields

**Relationships:**

- Many-to-One with EVBrand (many models can belong to one brand)
- Many-to-Many with ReviewArticle (models can be featured in multiple articles, and articles can feature multiple models)


### 3. ReviewArticle

Represents articles reviewing or comparing electric vehicles.

**Attributes:**

- `id`: UUID, Primary Key
- `title`: String, required
- `excerpt`: String, required (short summary)
- `content`: Text, required (rich text with HTML)
- `publish_date`: DateTime, required
- `featured_image`: Media (image), optional
- `author_id`: UUID, Foreign Key to Author
- `view_count`: Number, default: 0
- `slug`: String, required, unique (for URL routing)
- `is_featured`: Boolean, default: false


**i18n Fields:** `title`, `excerpt`, `content`

**Relationships:**

- Many-to-One with Author (many articles can be written by one author)
- Many-to-Many with Tag (articles can have multiple tags)
- Many-to-Many with EVModel (articles can feature multiple EV models)


### 4. Author

Represents content creators who write review articles.

**Attributes:**

- `id`: UUID, Primary Key
- `name`: String, required
- `avatar`: Media (image), optional
- `bio`: Text, optional
- `email`: String, optional
- `social_media_links`: JSON, optional (links to social profiles)


**i18n Fields:** `bio`

**Relationships:**

- One-to-Many with ReviewArticle (one author can write many articles)


### 5. Tag

Represents categories or tags for organizing content.

**Attributes:**

- `id`: UUID, Primary Key
- `name`: String, required (e.g., "Đánh giá", "So sánh", "Tin tức")
- `slug`: String, required, unique
- `description`: Text, optional


**i18n Fields:** `name`, `description`

**Relationships:**

- Many-to-Many with ReviewArticle (tags can be applied to multiple articles)


### 6. NewsletterSubscriber

Represents users who have subscribed to the newsletter.

**Attributes:**

- `id`: UUID, Primary Key
- `email`: String, required, unique
- `name`: String, optional
- `active`: Boolean, default: true


**Relationships:**

- None (standalone entity)


## Junction Tables

### 1. EVModel_ReviewArticle

Manages the many-to-many relationship between EVModel and ReviewArticle.

**Attributes:**

- `id`: UUID, Primary Key
- `ev_model_id`: UUID, Foreign Key to EVModel
- `review_article_id`: UUID, Foreign Key to ReviewArticle


### 2. ReviewArticle_Tag

Manages the many-to-many relationship between ReviewArticle and Tag.

**Attributes:**

- `id`: UUID, Primary Key
- `review_article_id`: UUID, Foreign Key to ReviewArticle
- `tag_id`: UUID, Foreign Key to Tag


## Design Rationale

1. **Multilingual Support**: All content-related fields are marked for i18n support to accommodate both Vietnamese and English content, as specified in the project requirements.
2. **Flexible Content Structure**: The design separates brands from models, allowing for a hierarchical organization of vehicle data. This makes it easier to filter and compare vehicles by manufacturer.
3. **Rich Vehicle Specifications**: The EVModel entity includes detailed specifications to support comprehensive comparisons between different electric vehicles.
4. **Content Organization**: The Tag system allows for flexible categorization of articles, supporting the different content types mentioned in the project requirements (reviews, comparisons, news, guides).
5. **User Engagement**: The NewsletterSubscriber entity supports email marketing efforts to keep users engaged with the platform.
6. **SEO-Friendly URLs**: Slug fields are included for EVModels and ReviewArticles to support SEO-friendly URLs.
7. **Analytics Support**: The view_count field on ReviewArticle allows for tracking popular content and implementing trending features.


## Implementation Guidelines for Strapi

1. **Content Types Creation**:

1. Create each entity as a Collection Type in Strapi
2. Configure fields with appropriate data types and validations
3. Enable i18n for relevant fields



2. **Relationship Configuration**:

1. Set up relations between content types using Strapi's relation field
2. Configure appropriate cardinality (one-to-many, many-to-many)



3. **API Configuration**:

1. Configure permissions for each content type
2. Set up appropriate endpoints for public and authenticated access



4. **Media Library Setup**:

1. Configure media library for storing images (logos, featured images, avatars)
2. Set up appropriate image transformations for different use cases



5. **Internationalization**:

1. Enable i18n feature in Strapi
2. Configure Vietnamese (vi) as default language and English (en) as secondary
