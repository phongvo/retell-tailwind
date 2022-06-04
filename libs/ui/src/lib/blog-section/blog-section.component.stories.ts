import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BlogSectionComponent } from './blog-section.component';

export default {
  title: 'BlogSectionComponent',
  component: BlogSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<BlogSectionComponent>;

const Template: Story<BlogSectionComponent> = (args: BlogSectionComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}