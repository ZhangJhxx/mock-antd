import {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './input';
const ControlledInput = ()=>{
  const [value,setValue] = useState<string>();
  return <Input value={value} onChange={(e) =>{setValue(e.target.value)}}/>
}

export default {
  title: 'Components/Input',
  component: Input,
  argTypes:{
   
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = () => (
  <Input style={{width:"300px"}}/>
);
export const ControlledDefault: ComponentStory<typeof ControlledInput> = () => (
  <Input style={{width:"300px"}}/>
);


