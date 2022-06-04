import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StackedLayoutComponent } from './stacked-layout.component';

export default {
  title: 'StackedLayoutComponent',
  component: StackedLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<StackedLayoutComponent>;

const Template: Story<StackedLayoutComponent> = (args: StackedLayoutComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}