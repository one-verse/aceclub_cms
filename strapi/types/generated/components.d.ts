import type { Schema, Struct } from "@strapi/strapi";

export interface DynamicZoneBlogSection extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_blog_sections";
  info: {
    displayName: "BlogSection";
    icon: "archive";
  };
  attributes: {
    blogs: Schema.Attribute.Relation<"oneToMany", "api::blog.blog">;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface DynamicZoneBonusSlider extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_bonus_sliders";
  info: {
    description: "";
    displayName: "BonusSlider";
  };
  attributes: {
    allBonus: Schema.Attribute.Component<"shared.bonus-slide-item", true>;
    bonusSliderTitle: Schema.Attribute.Text;
    readMore: Schema.Attribute.Component<"shared.cta", true>;
  };
}

export interface DynamicZoneCarousel extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_carousels";
  info: {
    description: "";
    displayName: "carousel";
  };
  attributes: {
    slides: Schema.Attribute.Component<"shared.slide", true>;
  };
}

export interface DynamicZoneCategoriesGrid extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_categories_grids";
  info: {
    displayName: "CategoriesGrid";
    icon: "connector";
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      "oneToMany",
      "api::category.category"
    >;
    sectionDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    sectionTitle: Schema.Attribute.Text;
    tags: Schema.Attribute.Relation<"oneToMany", "api::tag.tag">;
  };
}

export interface DynamicZoneContentBlock extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_content_blocks";
  info: {
    displayName: "ContentBlock";
    icon: "paint";
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
  };
}

export interface DynamicZoneFaqSection extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_faq_sections";
  info: {
    description: "";
    displayName: "FAQSection";
    icon: "cursor";
  };
  attributes: {
    question_answers: Schema.Attribute.Relation<
      "oneToMany",
      "api::question-answer.question-answer"
    >;
    sectionTitle: Schema.Attribute.Text;
    viewFaq: Schema.Attribute.Component<"shared.cta", true>;
  };
}

export interface DynamicZoneFooterTopDemo extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_footer_top_demos";
  info: {
    description: "";
    displayName: "footerTopDemo";
  };
  attributes: {
    demoBtn: Schema.Attribute.Component<"shared.cta", false>;
    footerTopDesc: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    footerTopImg: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    mainTitle: Schema.Attribute.Text;
  };
}

export interface DynamicZoneGamingZone extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_gaming_zones";
  info: {
    description: "";
    displayName: "GamingZone";
  };
  attributes: {
    GamingZoneDesc: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    GamingZoneSlider: Schema.Attribute.Component<
      "dynamic-zone.carousel",
      false
    >;
    GamingZoneTitle: Schema.Attribute.Text;
  };
}

export interface DynamicZoneHomeBanner extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_home_banners";
  info: {
    description: "";
    displayName: "HomeBanner";
  };
  attributes: {
    homeSlider: Schema.Attribute.Component<"shared.home-slider-item", true>;
  };
}

export interface DynamicZoneMegaSection extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_mega_sections";
  info: {
    description: "";
    displayName: "MegaSection";
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    mainTitle: Schema.Attribute.Text;
    PlayButton: Schema.Attribute.Component<"shared.cta", false>;
    RHSImage: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    title: Schema.Attribute.Text;
    variant: Schema.Attribute.Enumeration<
      ["pink", "green", "theme", "poineersTheme"]
    >;
  };
}

export interface DynamicZoneOurPremier extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_our_premiers";
  info: {
    description: "";
    displayName: "OurPremier";
  };
  attributes: {
    sectionDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    sectionTitle: Schema.Attribute.Text;
    traits: Schema.Attribute.Component<"shared.trait", true>;
  };
}

export interface DynamicZonePlayersReviews extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_players_reviews";
  info: {
    description: "";
    displayName: "PlayersReviews";
  };
  attributes: {
    mainTitle: Schema.Attribute.Text;
    ReviewItem: Schema.Attribute.Component<"shared.player-rating-item", true>;
  };
}

export interface DynamicZonePromotions extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_promotions";
  info: {
    description: "";
    displayName: "Promotions";
  };
  attributes: {
    Promotion: Schema.Attribute.Component<"shared.promotion", true>;
    sectionTitle: Schema.Attribute.Text;
  };
}

export interface DynamicZoneRummyVideo extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_rummy_videos";
  info: {
    description: "";
    displayName: "RummyVideo";
  };
  attributes: {
    myRummyVideo: Schema.Attribute.Media<"videos">;
    videoDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    videoThumbnail: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    videoTitle: Schema.Attribute.Text;
  };
}

export interface DynamicZoneTabTraitSection extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_tab_trait_sections";
  info: {
    description: "";
    displayName: "TabTraitSection";
  };
  attributes: {
    tabDetails: Schema.Attribute.Component<"shared.tab-row-item", true>;
    TabTraitTitle: Schema.Attribute.Text;
  };
}

export interface DynamicZoneTraitsGrid extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_traits_grids";
  info: {
    description: "";
    displayName: "TraitsGrid";
    icon: "crown";
  };
  attributes: {
    sectionDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    sectionTitle: Schema.Attribute.Text;
    traits: Schema.Attribute.Component<"shared.trait", true>;
  };
}

export interface DynamicZoneWhyChooseUs extends Struct.ComponentSchema {
  collectionName: "components_dynamic_zone_why_chooseuses";
  info: {
    description: "";
    displayName: "WhyChooseUs";
  };
  attributes: {
    sectionDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    sectionTitle: Schema.Attribute.Text;
    traits: Schema.Attribute.Component<"shared.trait", true>;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: "components_seo_seos";
  info: {
    description: "";
    displayName: "seo";
    icon: "cursor";
  };
  attributes: {
    canonicalURL: Schema.Attribute.Text;
    headHTML: Schema.Attribute.Text;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<"images">;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedBannerDetail extends Struct.ComponentSchema {
  collectionName: "components_shared_banner_details";
  info: {
    description: "";
    displayName: "bannerDetail";
  };
  attributes: {
    bannerItemDesc: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    bannerItemTitle: Schema.Attribute.Text;
  };
}

export interface SharedBonusSlideItem extends Struct.ComponentSchema {
  collectionName: "components_shared_bonus_slide_items";
  info: {
    description: "";
    displayName: "BonusSlideItem";
  };
  attributes: {
    bonusBgImg: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    bonusDesc: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    bonusIcon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    bonusPackage: Schema.Attribute.Text;
    bonusTag: Schema.Attribute.Text;
    bonusTitle: Schema.Attribute.Text;
  };
}

export interface SharedBronzeVip extends Struct.ComponentSchema {
  collectionName: "components_shared_bronze_vips";
  info: {
    description: "";
    displayName: "bronzeVip";
  };
  attributes: {
    bronzeIcon: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    bronzeText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    bronzeTitle: Schema.Attribute.Text;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: "components_shared_ctas";
  info: {
    description: "";
    displayName: "CTA";
    icon: "cursor";
  };
  attributes: {
    link: Schema.Attribute.Text;
    socialIcon: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    target: Schema.Attribute.Enumeration<
      ["_self", "_blank", "_top", "_parent"]
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: "components_shared_footers";
  info: {
    description: "";
    displayName: "FooterNav";
  };
  attributes: {
    banStates: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    footerSocial: Schema.Attribute.Component<"shared.socail-payment", false>;
    Info: Schema.Attribute.Component<"shared.nav-items", false>;
  };
}

export interface SharedHomeSliderItem extends Struct.ComponentSchema {
  collectionName: "components_shared_home_slider_items";
  info: {
    description: "";
    displayName: "homeSliderItem";
  };
  attributes: {
    bannerSliderImg: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    bannerSubTitle: Schema.Attribute.Text;
    bannerTitle: Schema.Attribute.Text;
    demoBtn: Schema.Attribute.Component<"shared.cta", true>;
  };
}

export interface SharedNavItems extends Struct.ComponentSchema {
  collectionName: "components_shared_nav_items";
  info: {
    description: "";
    displayName: "NavItems";
    icon: "exit";
  };
  attributes: {
    footerTitleNav: Schema.Attribute.Text;
    items: Schema.Attribute.Component<"shared.cta", true>;
    NavRHS: Schema.Attribute.Component<"shared.cta", true>;
  };
}

export interface SharedPlayerRatingItem extends Struct.ComponentSchema {
  collectionName: "components_shared_player_rating_items";
  info: {
    description: "";
    displayName: "PlayerRatingItem";
  };
  attributes: {
    PlayerDetails: Schema.Attribute.Text;
    PlayerImage: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    RatingDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
  };
}

export interface SharedPromotion extends Struct.ComponentSchema {
  collectionName: "components_shared_promotions";
  info: {
    description: "";
    displayName: "Promotion";
  };
  attributes: {
    knowMore: Schema.Attribute.Text;
    knowMoreContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    PlayButton: Schema.Attribute.Component<"shared.cta", false>;
    promotionImage: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
  };
}

export interface SharedQuestions extends Struct.ComponentSchema {
  collectionName: "components_shared_questions";
  info: {
    displayName: "Questions";
    icon: "filter";
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    question: Schema.Attribute.Text;
  };
}

export interface SharedSlide extends Struct.ComponentSchema {
  collectionName: "components_shared_slides";
  info: {
    description: "";
    displayName: "slide";
    icon: "landscape";
  };
  attributes: {
    cta: Schema.Attribute.Component<"shared.cta", false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    desktopImage: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    mobileImage: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.Text;
  };
}

export interface SharedSocailPayment extends Struct.ComponentSchema {
  collectionName: "components_shared_socail_payments";
  info: {
    description: "";
    displayName: "socailPayment";
  };
  attributes: {
    copyRights: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    SocialItem: Schema.Attribute.Component<"shared.nav-items", false>;
  };
}

export interface SharedTabRowItem extends Struct.ComponentSchema {
  collectionName: "components_shared_tab_row_items";
  info: {
    displayName: "TabRowItem";
  };
  attributes: {
    greenTag: Schema.Attribute.Text;
    orangeTag: Schema.Attribute.Text;
    tabBtnTitle: Schema.Attribute.Text;
    tabDescContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    tabDescTitle: Schema.Attribute.Text;
    tabRelatedImg: Schema.Attribute.Media<"images">;
  };
}

export interface SharedTrait extends Struct.ComponentSchema {
  collectionName: "components_shared_traits";
  info: {
    description: "";
    displayName: "trait";
    icon: "cursor";
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
    icon: Schema.Attribute.Media<"images">;
    title: Schema.Attribute.String;
    traitText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultHtml";
        }
      >;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "dynamic-zone.blog-section": DynamicZoneBlogSection;
      "dynamic-zone.bonus-slider": DynamicZoneBonusSlider;
      "dynamic-zone.carousel": DynamicZoneCarousel;
      "dynamic-zone.categories-grid": DynamicZoneCategoriesGrid;
      "dynamic-zone.content-block": DynamicZoneContentBlock;
      "dynamic-zone.faq-section": DynamicZoneFaqSection;
      "dynamic-zone.footer-top-demo": DynamicZoneFooterTopDemo;
      "dynamic-zone.gaming-zone": DynamicZoneGamingZone;
      "dynamic-zone.home-banner": DynamicZoneHomeBanner;
      "dynamic-zone.mega-section": DynamicZoneMegaSection;
      "dynamic-zone.our-premier": DynamicZoneOurPremier;
      "dynamic-zone.players-reviews": DynamicZonePlayersReviews;
      "dynamic-zone.promotions": DynamicZonePromotions;
      "dynamic-zone.rummy-video": DynamicZoneRummyVideo;
      "dynamic-zone.tab-trait-section": DynamicZoneTabTraitSection;
      "dynamic-zone.traits-grid": DynamicZoneTraitsGrid;
      "dynamic-zone.why-choose-us": DynamicZoneWhyChooseUs;
      "seo.seo": SeoSeo;
      "shared.banner-detail": SharedBannerDetail;
      "shared.bonus-slide-item": SharedBonusSlideItem;
      "shared.bronze-vip": SharedBronzeVip;
      "shared.cta": SharedCta;
      "shared.footer": SharedFooter;
      "shared.home-slider-item": SharedHomeSliderItem;
      "shared.nav-items": SharedNavItems;
      "shared.player-rating-item": SharedPlayerRatingItem;
      "shared.promotion": SharedPromotion;
      "shared.questions": SharedQuestions;
      "shared.slide": SharedSlide;
      "shared.socail-payment": SharedSocailPayment;
      "shared.tab-row-item": SharedTabRowItem;
      "shared.trait": SharedTrait;
    }
  }
}
