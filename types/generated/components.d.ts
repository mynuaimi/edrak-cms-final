import type { Schema, Struct } from '@strapi/strapi';

export interface PageElementsServiceFeature extends Struct.ComponentSchema {
  collectionName: 'components_page_elements_service_features';
  info: {
    displayName: 'Service Feature';
  };
  attributes: {
    FeatureText: Schema.Attribute.String;
  };
}

export interface PageElementsServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_page_elements_service_sections';
  info: {
    displayName: 'Service Section';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Features: Schema.Attribute.Component<'page-elements.service-feature', true>;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_links';
  info: {
    displayName: 'MenuLink';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page-elements.service-feature': PageElementsServiceFeature;
      'page-elements.service-section': PageElementsServiceSection;
      'shared.menu-link': SharedMenuLink;
    }
  }
}
