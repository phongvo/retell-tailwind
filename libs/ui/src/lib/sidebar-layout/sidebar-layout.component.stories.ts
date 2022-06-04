import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SidebarLayoutComponent } from './sidebar-layout.component';

export default {
  title: 'SidebarLayoutComponent',
  component: SidebarLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SidebarLayoutComponent>;

const Template: Story<SidebarLayoutComponent> = (args: SidebarLayoutComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}