import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FooterSectionComponent } from './footer-section.component';

export default {
  title: 'FooterSectionComponent',
  component: FooterSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FooterSectionComponent>;

const Template: Story<FooterSectionComponent> = (args: FooterSectionComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}