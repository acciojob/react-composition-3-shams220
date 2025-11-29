import React,{useState} from 'react'

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
    <div>
      <div className='visible'
      style={{
      
        }}>
            {fvisible && <div style={{backgroundColor:"red",color:"white"}}>
                {props.prop[0]}</div>}
       <div style={{backgroundColor:"white",height:"3rem"}}>
         <h1 onMouseEnter={isVisible} onMouseLeave={hide}>Hover over me</h1>
       </div>
     {svisible && <div style={{backgroundColor:"red",color:"white"}}>
                {props.prop[1]}</div>}
<div style={{backgroundColor:"white",height:"3rem"}} >
      <h3 onMouseEnter={secVisble} onMouseLeave={hide}>Hover over me to see another tooltip</h3>
    </div>       
      </div>
     
    </div>
  )
}

export default Tooltip
