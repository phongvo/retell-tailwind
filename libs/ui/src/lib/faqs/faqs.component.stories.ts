import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FaqsComponent } from './faqs.component';

export default {
  title: 'FaqsComponent',
  component: FaqsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FaqsComponent>;

const Template: Story<FaqsComponent> = (args: FaqsComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}