import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ContactPageComponent } from './contact-page.component';

export default {
  title: 'ContactPageComponent',
  component: ContactPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ContactPageComponent>;

const Template: Story<ContactPageComponent> = (args: ContactPageComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}