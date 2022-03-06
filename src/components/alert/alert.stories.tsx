import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from './alert';


export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    alertType: {
      description: "提示类型",
      control: {
        type: "inline-radio",
        options: ["success", "error", "warning", "default"]
      },
    },
    autoClose: {
      description: "自动消失",
      control: {
        type: "boolean"
      }
    },
    closeAble: {
      description: "是否可以关闭弹窗",
      control: {
        type: "boolean"
      }
    },
    durationTime: {
      description: "弹窗时间",
      control: { type: "range",min:1000,max:10000, step:1000}
    },
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  alertType: 'success',
  message: 'success Alert',
  autoClose: false,
  closeAble: true,
  durationTime: 3000
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  alertType: 'error',
  message: 'error Alert',
  autoClose: false,
  closeAble: true,
  durationTime: 3000
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  alertType: 'warning',
  message: 'warning Alert',
  autoClose: false,
  closeAble: true,
  durationTime: 3000
};

export const DefaultAlert = Template.bind({});
DefaultAlert.args = {
  alertType: 'default',
  message: 'default Alert',
  autoClose: false,
  closeAble: true,
  durationTime: 3000
};