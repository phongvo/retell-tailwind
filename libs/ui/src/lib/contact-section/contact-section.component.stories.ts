import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ContactSectionComponent } from './contact-section.component';

export default {
  title: 'ContactSectionComponent',
  component: ContactSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ContactSectionComponent>;

const Template: Story<ContactSectionComponent> = (args: ContactSectionComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}