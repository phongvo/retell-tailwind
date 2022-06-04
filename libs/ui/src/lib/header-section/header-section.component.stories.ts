import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HeaderSectionComponent } from './header-section.component';

export default {
  title: 'HeaderSectionComponent',
  component: HeaderSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<HeaderSectionComponent>;

const Template: Story<HeaderSectionComponent> = (args: HeaderSectionComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}