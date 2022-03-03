import React from 'react';
import { getDate } from "date-fns"
import { getWeeks } from "./generator.mjs"
interface IDatePicker {

}
const datePicker: React.FC<IDatePicker> = (props) => {
  const weeks: number[][] = getWeeks(2022,2);

  return (
    <table>
      <tbody>
        {weeks.map((week, idx) =>
          <tr key={idx}>
            {week.map((day, index) =>
              <td key={index}>
                {getDate(day)}
              </td>)}
          </tr>)}
      </tbody>
    </table>
  );
}

datePicker.defaultProps = {

};

export default datePicker;
