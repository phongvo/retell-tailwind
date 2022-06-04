import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SectionHeadingComponent } from './section-heading.component';

export default {
  title: 'SectionHeadingComponent',
  component: SectionHeadingComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SectionHeadingComponent>;

const Template: Story<SectionHeadingComponent> = (args: SectionHeadingComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}