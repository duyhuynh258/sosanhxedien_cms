import type { Schema, Struct } from '@strapi/strapi';

export interface SpecificationsSpecItem extends Struct.ComponentSchema {
  collectionName: 'components_specifications_items';
  info: {
    description: 'Individual car specification item';
    displayName: 'Specification Item';
    icon: 'wrench';
  };
  attributes: {
    is_highlighted: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SpecificationsSpecSection extends Struct.ComponentSchema {
  collectionName: 'components_specifications_sections';
  info: {
    description: 'Group of related car specifications';
    displayName: 'Specification Section';
    icon: 'list';
  };
  attributes: {
    section_title: Schema.Attribute.String & Schema.Attribute.Required;
    specs: Schema.Attribute.Component<'specifications.spec-item', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'specifications.spec-item': SpecificationsSpecItem;
      'specifications.spec-section': SpecificationsSpecSection;
    }
  }
}
