import React, {useState} from "react";
import Dropdown from "./Dropdown"
import axios from 'axios'
import Convert from "./Convert"


const options = [
  {
    label: "Cheddar",
    value: "1023264"
  },
  {
    label: "Carrots",
    value: "1003464"
  },
  {
    label: "Zuchini",
    value: "1123264"
  },
]


const Translate = () => {
  const [product,setProduct] = useState(options[0])
  const[text, setText] = useState("");
  return (
    <div>
    <div className="ui container form">
      <div className="field">
      <label> Enter text </label>
        <input value={text} onChange={ (e) => setText(e.target.value)} />
      </div>
    </div>

      <Dropdown
        label="Select a product"
        options={options}
        selected={product}
        onSelectedChange = {setProduct}
      />
      <hr />

      <Convert
        product = {product}
        text= {text}
      />
    </div>
  )
}


export default Translate;
