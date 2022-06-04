import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StatsSectionComponent } from './stats-section.component';

export default {
  title: 'StatsSectionComponent',
  component: StatsSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<StatsSectionComponent>;

const Template: Story<StatsSectionComponent> = (args: StatsSectionComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}