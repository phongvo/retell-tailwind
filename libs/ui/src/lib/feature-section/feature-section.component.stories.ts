import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FeatureSectionComponent } from './feature-section.component';

export default {
  title: 'FeatureSectionComponent',
  component: FeatureSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FeatureSectionComponent>;

const Template: Story<FeatureSectionComponent> = (args: FeatureSectionComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}