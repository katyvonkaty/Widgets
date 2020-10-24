import React, {useState} from 'react';
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Foodbase from "./components/Foodbase"
import Translate from "./components/Translate"
import Dropdown from "./components/Dropdown"
import Route from "./components/Route"
import Header from "./components/Header"



const options = [
  {
    label: "what is a cockapoo",
    value:" an angel"
  },
  {
      label: "what is a cockapoo",
      value:" an angel"
    },
    {
      label: "what is a cockapoo",
      value:" an angel"
    }
]



function App() {

  const [selected, setSelected] = useState(options[0])

  return (
    <div className="App">
    <Header />
      <Route path="/">
        <Search />
      </Route>
      <Route path="/foodbase">
        <Foodbase />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
        label="Select"
        options={options}
        selected={selected}
        onSelectedChange= {setSelected} />
      </Route>


    </div>
  );
}

export default App;
