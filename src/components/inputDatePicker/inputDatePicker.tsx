import React from 'react';
import DatePicker from './datePicker';
interface IInputDatePicker{

}
const InputDatePicker:React.FC<IInputDatePicker>=(props)=> {
  return <DatePicker></DatePicker>;
}

InputDatePicker.defaultProps = {};

export default InputDatePicker;
