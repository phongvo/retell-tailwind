import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PageHeadingComponent } from './page-heading.component';

export default {
  title: 'PageHeadingComponent',
  component: PageHeadingComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PageHeadingComponent>;

const Template: Story<PageHeadingComponent> = (args: PageHeadingComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}