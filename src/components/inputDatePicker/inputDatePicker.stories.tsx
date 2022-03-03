import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputDatePicker from './inputDatePicker';


export default {
  title: 'Components/InputDatePicker',
  component: InputDatePicker,
  argTypes:{
  }
} as ComponentMeta<typeof InputDatePicker>;

const Template: ComponentStory<typeof InputDatePicker> = (args) => <InputDatePicker {...args} />;

export const example = Template.bind({});

