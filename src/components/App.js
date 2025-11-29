
import React from "react";
import './../styles/App.css';
import Tooltip from "./tooltip";
const App = () => {

  var first = "This is a Tooltip"
  var second = "This is another Tooltip"
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip prop = {[first,second]} />
    </div>
  )
}

export default App
