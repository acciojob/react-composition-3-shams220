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
        borderBottom:"5px",
        borderColor:"grey",
        display:"flex",
        flexDirection:"column",
        // justifyContent:"center",
        // justifyContent:"flex-end",
        alignItems:"center"
        }}>
            {fvisible && props.prop.first}
        <h1 onMouseEnter={isVisible} onMouseLeave={hide}>Hover over me</h1>
     {svisible && props.prop.second}
      <h3 onMouseEnter={secVisble} onMouseLeave={hide}>Hover over me to see another tooltip</h3>
       
      </div>
     
    </div>
  )
}

export default Tooltip
