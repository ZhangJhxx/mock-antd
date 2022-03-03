import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './button';


export default {
  title: 'Components/Button',
  component: Button,
  argTypes:{
    btnType:{
      description:"按钮类型",
      control:{
        type:"inline-radio",
        options:['primary' , 'secondary' , 'success' ,'danger','default','info','dark','light','warning',"error",'link','default']
      },
    },
    size:{control:{type:"inline-radio",options:["sm","lg"]}},
    hollow:{control:{type:"boolean"}},
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  btnType: 'primary',
  label: 'Primary',
};

export const Link = Template.bind({});
Link.args ={
  btnType:'link',
  label:'link',
  target:"_blank",
  href:"http://baidu.com"
}
Link.parameters={

  docs: {
    source: {code: '<Button btnType="link" label="link"  href="https//:www.baidu.com" target="_blank"/>'},
  },
}
export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  size:  'sm',
  label: 'Small',
};
export const Hollow = Template.bind({});
Hollow.args = {
  label:"hollow",
  btnType:"danger",
  hollow:true
}
