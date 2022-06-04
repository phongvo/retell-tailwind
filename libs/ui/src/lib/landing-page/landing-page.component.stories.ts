import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LandingPageComponent } from './landing-page.component';

export default {
  title: 'LandingPageComponent',
  component: LandingPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<LandingPageComponent>;

const Template: Story<LandingPageComponent> = (args: LandingPageComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}