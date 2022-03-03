import { action } from '@storybook/addon-actions'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu';


export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes:{
    mode:{
      control:{
        type:"inline-radio",
        options:["horizontal","vertical"]
      }
    },
  }
} as ComponentMeta<typeof Menu>;

const defaultMenu :ComponentStory<typeof Menu> = (args) => {
  return (
    <div>
      <Menu defaultIndex='0'  {...args}>
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem>
          disabled
        </MenuItem> 
        <SubMenu title="dropDown" >
          <MenuItem>
            dropDown1
          </MenuItem>
          <MenuItem>
            dropDown2
          </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  )
}
export const horizontal = defaultMenu.bind({});
horizontal.args = {
  mode:"horizontal"
}
export const vertical = defaultMenu.bind({});
horizontal.args = {
  mode:"vertical"
}