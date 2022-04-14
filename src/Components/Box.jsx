import React from 'react'
import './Style.css';

function Box(props) {
    const classes=(props.className ? `${props.className} square`: `square`)
  return (
    <div>
      <span className={classes + (props.state ==='X' ? 'fc-red': 'fc-yellow')}
      onClick={()=>props.onClick(props.index)} >
        {props.state}   
      </span>
    </div>
  )
}

export default Box
