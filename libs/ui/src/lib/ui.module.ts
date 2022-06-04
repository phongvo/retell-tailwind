import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { FaqsComponent } from './faqs/faqs.component';
import { NewsletterSectionComponent } from './newsletter-section/newsletter-section.component';
import { StatsSectionComponent } from './stats-section/stats-section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { LogoCloudsComponent } from './logo-clouds/logo-clouds.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FlyMenuComponent } from './fly-menu/fly-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { StackedLayoutComponent } from './stacked-layout/stacked-layout.component';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { MultiColumnLayoutComponent } from './multi-column-layout/multi-column-layout.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { CardHeadingComponent } from './card-heading/card-heading.component';
import { SectionHeadingComponent } from './section-heading/section-heading.component';
import { DescriptionListComponent } from './description-list/description-list.component';
import { StatsListComponent } from './stats-list/stats-list.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeroSectionComponent,
    FeatureSectionComponent,
    CtaSectionComponent,
    PricingSectionComponent,
    HeaderSectionComponent,
    FaqsComponent,
    NewsletterSectionComponent,
    StatsSectionComponent,
    TestimonialsComponent,
    BlogSectionComponent,
    ContactSectionComponent,
    TeamSectionComponent,
    ContentSectionComponent,
    FooterSectionComponent,
    LogoCloudsComponent,
    HeaderComponent,
    BannerComponent,
    FlyMenuComponent,
    NotFoundComponent,
    LandingPageComponent,
    PricingPageComponent,
    ContactPageComponent,
    StackedLayoutComponent,
    SidebarLayoutComponent,
    MultiColumnLayoutComponent,
    PageHeadingComponent,
    CardHeadingComponent,
    SectionHeadingComponent,
    DescriptionListComponent,
    StatsListComponent,
    CalendarComponent,
  ],
})
export class UiModule {}
