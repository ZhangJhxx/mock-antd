import {FC} from "react"
import {ThemeProps} from "../icon/icon"
interface ProgressBarProps{
  percent: number;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
  barHeight?: number;
  showText?: boolean;
  
}

const ProgressBar:FC<ProgressBarProps> = (props) =>{
  const {percent, styles, showText, theme, barHeight} = props;
  return (
    <div className="my-progress-bar" style={styles}>
      <div 
        className ="outer-progress-bar" 
        style={{height: barHeight+"px"}}>
          <div className="inner-progress-bar-wrapper"
            style={{width:`${percent}%`}}>
            <div 
              className ={`inner-progress-bar color-${theme}`} >
              {showText &&  <span className="inner-text">{`${percent}%`}</span>}
            </div>
          </div>
      </div>
    </div>
  )
}
ProgressBar.defaultProps = {
  theme:"primary",
  showText: true,
  barHeight: 20
}

export default ProgressBar