import type { Schema, Struct } from '@strapi/strapi';

export interface DataManagementDataSetCard extends Struct.ComponentSchema {
  collectionName: 'components_data_management_data_set_cards';
  info: {
    displayName: 'DataSetCard';
  };
  attributes: {
    ApiID: Schema.Attribute.String & Schema.Attribute.Required;
    IconName: Schema.Attribute.String;
    IconPackage: Schema.Attribute.String;
    MetricLabel: Schema.Attribute.String;
    Slug: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface EmpDashboardStatCard extends Struct.ComponentSchema {
  collectionName: 'components_emp_dashboard_stat_cards';
  info: {
    displayName: 'StatCard';
  };
  attributes: {
    iconName: Schema.Attribute.String;
    iconPackage: Schema.Attribute.String;
    label: Schema.Attribute.String;
    metricKey: Schema.Attribute.String;
  };
}

export interface EmpNavigationSidebarGroup extends Struct.ComponentSchema {
  collectionName: 'components_emp_navigation_sidebar_groups';
  info: {
    displayName: 'SidebarGroup';
  };
  attributes: {
    groupTitle: Schema.Attribute.String;
    iconName: Schema.Attribute.String;
    iconPackage: Schema.Attribute.String;
    menuItems: Schema.Attribute.Component<'emp-navigation.sidebar-item', true>;
  };
}

export interface EmpNavigationSidebarItem extends Struct.ComponentSchema {
  collectionName: 'components_emp_navigation_sidebar_items';
  info: {
    displayName: 'SidebarItem';
  };
  attributes: {
    iconName: Schema.Attribute.String;
    iconPackage: Schema.Attribute.String;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

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

export interface PageElementsValueEntry extends Struct.ComponentSchema {
  collectionName: 'components_page_elements_value_entries';
  info: {
    displayName: 'ValueEntry';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    ImageIcon: Schema.Attribute.Media<'images'>;
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

export interface WebEmpDashboardCard extends Struct.ComponentSchema {
  collectionName: 'components_web_emp_dashboard_cards';
  info: {
    displayName: 'Dashboard Card';
  };
  attributes: {
    accentColor: Schema.Attribute.Relation<
      'oneToMany',
      'api::ref-color.ref-color'
    >;
    badgeColor: Schema.Attribute.Relation<
      'oneToMany',
      'api::ref-color.ref-color'
    >;
    badgeText: Schema.Attribute.String;
    bgColor: Schema.Attribute.Relation<'oneToMany', 'api::ref-color.ref-color'>;
    iconName: Schema.Attribute.Relation<'oneToMany', 'api::ref-icon.ref-icon'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    useBuildingsCount: Schema.Attribute.Boolean;
    value: Schema.Attribute.String;
  };
}

export interface WebEmpNavLink extends Struct.ComponentSchema {
  collectionName: 'components_web_emp_nav_links';
  info: {
    displayName: 'NavLink';
  };
  attributes: {
    iconName: Schema.Attribute.Relation<'oneToMany', 'api::ref-icon.ref-icon'>;
    label: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    path: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'data-management.data-set-card': DataManagementDataSetCard;
      'emp-dashboard.stat-card': EmpDashboardStatCard;
      'emp-navigation.sidebar-group': EmpNavigationSidebarGroup;
      'emp-navigation.sidebar-item': EmpNavigationSidebarItem;
      'page-elements.service-feature': PageElementsServiceFeature;
      'page-elements.service-section': PageElementsServiceSection;
      'page-elements.value-entry': PageElementsValueEntry;
      'shared.menu-link': SharedMenuLink;
      'web-emp.dashboard-card': WebEmpDashboardCard;
      'web-emp.nav-link': WebEmpNavLink;
    }
  }
}
