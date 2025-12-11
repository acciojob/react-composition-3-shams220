
import React from "react";
import './../styles/App.css';
import Tooltip from "./tooltip";
const App = () => {

  
  return (
    <div>
        {/* Do not remove the main div */}
       <Tooltip text="This is a Tooltip">
        <h1>Hover over me</h1>
       </Tooltip>
       <Tooltip text="This is another Tooltip">
        <h3>Hover over me to see another tooltip</h3>
       </Tooltip>
        
    </div>
  )
}

export default App
