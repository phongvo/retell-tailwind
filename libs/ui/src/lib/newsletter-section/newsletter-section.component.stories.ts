import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NewsletterSectionComponent } from './newsletter-section.component';

export default {
  title: 'NewsletterSectionComponent',
  component: NewsletterSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<NewsletterSectionComponent>;

const Template: Story<NewsletterSectionComponent> = (args: NewsletterSectionComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}