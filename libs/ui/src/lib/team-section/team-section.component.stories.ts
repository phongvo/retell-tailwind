import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TeamSectionComponent } from './team-section.component';

export default {
  title: 'TeamSectionComponent',
  component: TeamSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TeamSectionComponent>;

const Template: Story<TeamSectionComponent> = (args: TeamSectionComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}