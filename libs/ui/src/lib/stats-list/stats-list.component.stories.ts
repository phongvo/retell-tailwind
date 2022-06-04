import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StatsListComponent } from './stats-list.component';

export default {
  title: 'StatsListComponent',
  component: StatsListComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<StatsListComponent>;

const Template: Story<StatsListComponent> = (args: StatsListComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}