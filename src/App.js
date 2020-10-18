import React, {useState} from 'react';
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Test from "./components/Test"
import Dropdown from "./components/Dropdown"



const items = [
  {
    title: "teddy",
    content: "a sog"
  }, {
    title: "cockapoo",
    content: "bc hes the best"
  }, {
    title: "est",
    content: "ok"
  }
]

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
  const [selected, setSelected] = useState(options[0])
  return (
    <div className="App">
       <Dropdown
       selected={selected}
       onSelectedChange={setSelected}
       options={options}/>
    </div>
  );
}

export default App;
