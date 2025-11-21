import type { Schema, Struct } from '@strapi/strapi';

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
      'shared.menu-link': SharedMenuLink;
    }
  }
}
