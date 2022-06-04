import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PricingSectionComponent } from './pricing-section.component';

export default {
  title: 'PricingSectionComponent',
  component: PricingSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PricingSectionComponent>;

const Template: Story<PricingSectionComponent> = (args: PricingSectionComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}