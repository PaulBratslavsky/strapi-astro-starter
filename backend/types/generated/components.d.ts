import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    mdIconName: Attribute.String;
    link: Attribute.Component<'elements.link'>;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    isButton: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface LayoutCardRow extends Schema.Component {
  collectionName: 'components_layout_card_rows';
  info: {
    displayName: 'Card Row';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    card: Attribute.Component<'elements.card', true>;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'elements.link', true>;
    image: Attribute.Media;
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
      'elements.card': ElementsCard;
      'elements.link': ElementsLink;
      'layout.card-row': LayoutCardRow;
      'layout.hero': LayoutHero;
      'layout.metadata': LayoutMetadata;
      'layout.navigation': LayoutNavigation;
    }
  }
}
