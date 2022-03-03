import {chunk} from "lodash"
import { startOfWeek,addDays } from 'date-fns'
export const getWeeks = (year,monthIndex)=>{
  const firstDayOfMonth = new Date(year, monthIndex-1);
  const firstDayOfCalender = startOfWeek(firstDayOfMonth,{weekStartsOn:1});
  const weeks = new Array(6*7).fill(0).map((_,i)=>addDays(firstDayOfCalender,i));
  // return  Array.from(Array(6),()=>new Array(7).fill(0));
  return chunk(weeks,7);
}