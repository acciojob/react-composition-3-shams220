
import React from "react";
import './../styles/App.css';
import Tooltip from "./tooltip";
const App = () => {

  var first = "This is a Tooltip"
  var second = "This is another Tooltip"
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip first = "This is a Tooltip" second = "This is another Tooltip"/>
    </div>
  )
}

export default App
