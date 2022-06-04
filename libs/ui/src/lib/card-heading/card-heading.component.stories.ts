import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CardHeadingComponent } from './card-heading.component';

export default {
  title: 'CardHeadingComponent',
  component: CardHeadingComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CardHeadingComponent>;

const Template: Story<CardHeadingComponent> = (args: CardHeadingComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}