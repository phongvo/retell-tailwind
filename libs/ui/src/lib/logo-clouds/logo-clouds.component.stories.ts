import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LogoCloudsComponent } from './logo-clouds.component';

export default {
  title: 'LogoCloudsComponent',
  component: LogoCloudsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<LogoCloudsComponent>;

const Template: Story<LogoCloudsComponent> = (args: LogoCloudsComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}