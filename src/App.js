import React, {useState} from 'react';
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Translate from "./components/Translate"
import Dropdown from "./components/Dropdown"



const options = [
  {
    label: "red",
    value:"red"
  }, {
    label: "green",
    value: "green"
  }, {
    label: "blue",
    value: "blue"
  }
]


function App() {


  return (
    <div className="App">

    <Translate />
    </div>
  );
}

export default App;
