import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CtaSectionComponent } from './cta-section.component';

export default {
  title: 'CtaSectionComponent',
  component: CtaSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CtaSectionComponent>;

const Template: Story<CtaSectionComponent> = (args: CtaSectionComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}