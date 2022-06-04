import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ContentSectionComponent } from './content-section.component';

export default {
  title: 'ContentSectionComponent',
  component: ContentSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ContentSectionComponent>;

const Template: Story<ContentSectionComponent> = (args: ContentSectionComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}