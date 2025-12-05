import React,{useState} from 'react'
import './tooltip.css'

const Tooltip = (props) => {
  const [fvisible,setfVisible] = useState(false);
  const [svisible,setsVisible] = useState(false);
  const isVisible=()=>{
    setfVisible(true);
  }
  const secVisble=()=>{
    setsVisible(true)
  }
  const hide=()=>{
    setfVisible(false);
    setsVisible(false)
  }
    return (
    <div className='master' >
      <div className='visible'
      style={{
      
        }}>
            {fvisible && <div style={{backgroundColor:"red",color:"white"}} className='first'>
                {props.first}</div>}
       <div style={{backgroundColor:"white",height:"3rem"}} className='h1'>
         <h1 onMouseEnter={isVisible} onMouseLeave={hide} >Hover over me</h1>
       </div>
     {svisible && <div style={{backgroundColor:"red",color:"white"}} className='second'>
                {props.second}</div>}
<div style={{backgroundColor:"white",height:"3rem"}} className='h3'>
      <h3 onMouseEnter={secVisble} onMouseLeave={hide} >Hover over me to see another tooltip</h3>
    </div>       
      </div>
     
    </div>
  )
}

export default Tooltip
