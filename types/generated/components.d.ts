import type { Schema, Struct } from '@strapi/strapi';

export interface JobJobConditionsList extends Struct.ComponentSchema {
  collectionName: 'components_job_job_conditions_lists';
  info: {
    displayName: 'JobConditionsList';
  };
  attributes: {
    JobList: Schema.Attribute.RichText;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
  };
}

export interface JobJobContacts extends Struct.ComponentSchema {
  collectionName: 'components_job_job_contacts';
  info: {
    displayName: 'JobContacts';
  };
  attributes: {
    ContactInfo: Schema.Attribute.RichText;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
  };
}

export interface JobJobDescription extends Struct.ComponentSchema {
  collectionName: 'components_job_job_descriptions';
  info: {
    displayName: 'JobDescription';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    DescriptionFile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
  };
}

export interface JobJobLink extends Struct.ComponentSchema {
  collectionName: 'components_job_job_links';
  info: {
    displayName: 'JobLink';
  };
  attributes: {
    JobImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    JobTitle: Schema.Attribute.Text;
    JobTitleGreyText: Schema.Attribute.String;
    Link: Schema.Attribute.String;
  };
}

export interface JobJobList extends Struct.ComponentSchema {
  collectionName: 'components_job_job_lists';
  info: {
    displayName: 'JobList';
  };
  attributes: {
    JobLink: Schema.Attribute.Component<'job.job-link', true>;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
  };
}

export interface MainPageMainQuote extends Struct.ComponentSchema {
  collectionName: 'components_main_page_main_quotes';
  info: {
    displayName: 'MainQuote';
  };
  attributes: {
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
    Text: Schema.Attribute.RichText;
  };
}

export interface MainPageMainSlider extends Struct.ComponentSchema {
  collectionName: 'components_main_page_main_sliders';
  info: {
    displayName: 'MainSlider';
  };
  attributes: {
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
  };
}

export interface MainPageMainTitle extends Struct.ComponentSchema {
  collectionName: 'components_main_page_main_titles';
  info: {
    displayName: 'MainTitle';
  };
  attributes: {
    OrangeText: Schema.Attribute.String;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
    Title: Schema.Attribute.String;
  };
}

export interface MainPageTextAndImage extends Struct.ComponentSchema {
  collectionName: 'components_main_page_text_and_images';
  info: {
    displayName: 'ImageAndText';
  };
  attributes: {
    Button_Link: Schema.Attribute.Text;
    Button_Text: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface NewsPageAllNews extends Struct.ComponentSchema {
  collectionName: 'components_news_page_all_news';
  info: {
    displayName: 'AllNews';
  };
  attributes: {};
}

export interface NewsPageNewsDate extends Struct.ComponentSchema {
  collectionName: 'components_news_page_news_dates';
  info: {
    displayName: 'NewsDate';
  };
  attributes: {
    DateNum: Schema.Attribute.String;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
  };
}

export interface SharedBorderTextAndWorkHours extends Struct.ComponentSchema {
  collectionName: 'components_shared_border_text_and_work_hours';
  info: {
    displayName: 'BorderTextAndWorkHours';
  };
  attributes: {
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
    Text: Schema.Attribute.RichText;
    WorkHours: Schema.Attribute.RichText;
  };
}

export interface SharedBreadCrumbs extends Struct.ComponentSchema {
  collectionName: 'components_shared_bread_crumbs';
  info: {
    displayName: 'BreadCrumbs';
  };
  attributes: {
    BreadCrumbs: Schema.Attribute.JSON;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
  };
}

export interface SharedContactForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_forms';
  info: {
    displayName: 'ContactForm';
  };
  attributes: {
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
  };
}

export interface SharedContactInfoAndMap extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_info_and_maps';
  info: {
    displayName: 'ContactInfoAndMap';
  };
  attributes: {
    GoogleMap: Schema.Attribute.Text;
    Info: Schema.Attribute.RichText;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedDownloadFile extends Struct.ComponentSchema {
  collectionName: 'components_shared_download_files';
  info: {
    displayName: 'DownloadFile';
  };
  attributes: {
    File: Schema.Attribute.Component<'shared.files', true>;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedEmployeeCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_employee_cards';
  info: {
    displayName: 'EmployeeCard';
  };
  attributes: {
    Email: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    JobTitle: Schema.Attribute.Text;
    Name: Schema.Attribute.Text;
    Phone: Schema.Attribute.String;
  };
}

export interface SharedEmployeesBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_employees_blocks';
  info: {
    displayName: 'EmployeesBlock';
  };
  attributes: {
    EmployeeCard: Schema.Attribute.Component<'shared.employee-card', true>;
    JobTitle: Schema.Attribute.String;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
  };
}

export interface SharedFiles extends Struct.ComponentSchema {
  collectionName: 'components_shared_files';
  info: {
    displayName: 'Files';
  };
  attributes: {
    FileName: Schema.Attribute.String;
    Files: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedImageAndBorderText extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_and_border_texts';
  info: {
    displayName: 'ImageAndBorderText';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    OnlyText: Schema.Attribute.Boolean;
    Reverse: Schema.Attribute.Boolean;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
    Text: Schema.Attribute.RichText;
  };
}

export interface SharedLinkContainer extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_containers';
  info: {
    displayName: 'LinkContainer';
  };
  attributes: {
    Button_Link: Schema.Attribute.Text;
    Button_Text: Schema.Attribute.Text;
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedLinksContainer extends Struct.ComponentSchema {
  collectionName: 'components_shared_links_containers';
  info: {
    displayName: 'LinksContainer';
  };
  attributes: {
    LinkContainer: Schema.Attribute.Component<'shared.link-container', true>;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
  };
}

export interface SharedOrangeButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_orange_buttons';
  info: {
    displayName: 'OrangeButton';
  };
  attributes: {
    Link: Schema.Attribute.String;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
    Text: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    Slides: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
  };
}

export interface SharedSoloImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_solo_images';
  info: {
    displayName: 'SoloImage';
  };
  attributes: {
    SingleImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
  };
}

export interface SharedSoloText extends Struct.ComponentSchema {
  collectionName: 'components_shared_solo_texts';
  info: {
    displayName: 'SoloText';
  };
  attributes: {
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
    Text: Schema.Attribute.RichText;
  };
}

export interface SharedTextAndImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_and_images';
  info: {
    displayName: 'TextAndImage';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
    Text: Schema.Attribute.RichText;
  };
}

export interface SharedTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    BrownText: Schema.Attribute.String;
    spacingTop: Schema.Attribute.Enumeration<['none', 'px20', 'px50', 'px140']>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'job.job-conditions-list': JobJobConditionsList;
      'job.job-contacts': JobJobContacts;
      'job.job-description': JobJobDescription;
      'job.job-link': JobJobLink;
      'job.job-list': JobJobList;
      'main-page.main-quote': MainPageMainQuote;
      'main-page.main-slider': MainPageMainSlider;
      'main-page.main-title': MainPageMainTitle;
      'main-page.text-and-image': MainPageTextAndImage;
      'news-page.all-news': NewsPageAllNews;
      'news-page.news-date': NewsPageNewsDate;
      'shared.border-text-and-work-hours': SharedBorderTextAndWorkHours;
      'shared.bread-crumbs': SharedBreadCrumbs;
      'shared.contact-form': SharedContactForm;
      'shared.contact-info-and-map': SharedContactInfoAndMap;
      'shared.download-file': SharedDownloadFile;
      'shared.employee-card': SharedEmployeeCard;
      'shared.employees-block': SharedEmployeesBlock;
      'shared.files': SharedFiles;
      'shared.image-and-border-text': SharedImageAndBorderText;
      'shared.link-container': SharedLinkContainer;
      'shared.links-container': SharedLinksContainer;
      'shared.orange-button': SharedOrangeButton;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.solo-image': SharedSoloImage;
      'shared.solo-text': SharedSoloText;
      'shared.text-and-image': SharedTextAndImage;
      'shared.title': SharedTitle;
    }
  }
}
