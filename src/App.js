import React, {useState} from 'react';
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Translate from "./components/Translate"
import Dropdown from "./components/Dropdown"
import Route from "./components/Route"
import Header from "./components/Header"

const items = [
  {
    title: "what is a cockapoo",
    content:" an angel"
  },
  {
      title: "what is a cockapoo",
      content:" an angel"
    },
    {
      title: "what is a cockapoo",
      content:" an angel"
    }
]

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
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
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
