import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FlyMenuComponent } from './fly-menu.component';

export default {
  title: 'FlyMenuComponent',
  component: FlyMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FlyMenuComponent>;

const Template: Story<FlyMenuComponent> = (args: FlyMenuComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}