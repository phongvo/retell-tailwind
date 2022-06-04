import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PricingPageComponent } from './pricing-page.component';

export default {
  title: 'PricingPageComponent',
  component: PricingPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PricingPageComponent>;

const Template: Story<PricingPageComponent> = (args: PricingPageComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}