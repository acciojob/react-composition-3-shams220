
import React from "react";
import './../styles/App.css';
import Tooltip from "./tooltip";
const App = () => {
  const text = {
    first:"This is a Tooltip",
    second:"This is another Tooltip"
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip prop ={text} />
    </div>
  )
}

export default App
