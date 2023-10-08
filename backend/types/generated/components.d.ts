import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    isButton: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutMetadata extends Schema.Component {
  collectionName: 'components_layout_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    metaImage: Attribute.Media;
  };
}

export interface LayoutNavigation extends Schema.Component {
  collectionName: 'components_layout_navigations';
  info: {
    displayName: 'Navigation';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    logoTitle: Attribute.String & Attribute.Required;
    logoImage: Attribute.Media & Attribute.Required;
    link: Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.link': ElementsLink;
      'layout.metadata': LayoutMetadata;
      'layout.navigation': LayoutNavigation;
    }
  }
}
