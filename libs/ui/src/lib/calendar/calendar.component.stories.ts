import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CalendarComponent } from './calendar.component';

export default {
  title: 'CalendarComponent',
  component: CalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CalendarComponent>;

const Template: Story<CalendarComponent> = (args: CalendarComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}