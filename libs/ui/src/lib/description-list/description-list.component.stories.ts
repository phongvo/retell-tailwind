import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DescriptionListComponent } from './description-list.component';

export default {
  title: 'DescriptionListComponent',
  component: DescriptionListComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<DescriptionListComponent>;

const Template: Story<DescriptionListComponent> = (args: DescriptionListComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}