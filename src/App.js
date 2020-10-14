import React from 'react';
import Accordion from "./components/Accordion"
import Search from "./components/Search"

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

function App() {
  return (
    <div className="App">
       <h1> Widget </h1>
       <Search />
    </div>
  );
}

export default App;
