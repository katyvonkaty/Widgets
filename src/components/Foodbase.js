import React, {useState, useEffect} from "react";
import axios from "axios"
import {Card, Raing,Icon, Input, Image} from "semantic-ui-react";

const Foodbase = () => {
  const [item, setItem] = useState("Nutrition...");
  const [payload, setPayload] = useState([])

  useEffect( () => {
    const searching = async() => {
      const { data } = await axios.get("https://api.edamam.com/api/food-database/v2/parser", {
        params: {
          origin:"*",
          app_id:"8082834a",
          app_key:"637bfd193623106380322c495fda5973",
          ingr: item
        }
      });
      setPayload(data.hints)
    };
searching()

},[item])


const renderFoods = () => {
  return(
    <div className="container ui four stackable cards">
      {payload.map(item => (
        <div className="ui fluid card " key={item.food.foodId}>
        <div className="header">

          <h2>{item.food.label}</h2>
            <img src = {item.food.image} />
            <h4>Category: {item.food.category}</h4>
            <h4>Fat:{item.food.nutrients.FAT} | Energy:{item.food.nutrients.ENERC_KCAL} | Cho:{item.food.nutrients.CHOCDF}</h4>

        </div>
        </div>
      ))}
  </div>
  )
}

return (
  <div className = "ui container form" >
    <div className = "field" >
      <Input icon='search'
      value = {item}
      onChange = { e => setItem(e.target.value)}
      className = "input" />
    </div>
    <div className="ui celled list">
    {renderFoods()}
    </div>
  </div>
)

}

export default Foodbase
