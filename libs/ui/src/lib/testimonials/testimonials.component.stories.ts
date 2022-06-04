import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TestimonialsComponent } from './testimonials.component';

export default {
  title: 'TestimonialsComponent',
  component: TestimonialsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TestimonialsComponent>;

const Template: Story<TestimonialsComponent> = (args: TestimonialsComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}