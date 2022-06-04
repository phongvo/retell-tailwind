import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MultiColumnLayoutComponent } from './multi-column-layout.component';

export default {
  title: 'MultiColumnLayoutComponent',
  component: MultiColumnLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MultiColumnLayoutComponent>;

const Template: Story<MultiColumnLayoutComponent> = (args: MultiColumnLayoutComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}