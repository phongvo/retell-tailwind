import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HeroSectionComponent } from './hero-section.component';

export default {
  title: 'HeroSectionComponent',
  component: HeroSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<HeroSectionComponent>;

const Template: Story<HeroSectionComponent> = (args: HeroSectionComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}