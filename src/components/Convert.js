import React, {
  useState,
  useEffect
} from "react";
import axios from "axios"
import { Grid, Card, Icon, Image } from 'semantic-ui-react'


const Convert = ({product}) => {
  const [updated, setUpdated] = useState([])

  useEffect(() => {
    const updateProducts = async() => {
    const { data } =  await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
        params: {
          origin: "*",
          apiKey: "c9cf6dcf2ca94080a3976b3e1280a181",
          number:12,
          query:product.label

        }
      })
      setUpdated(data.results);
    }
    updateProducts();

  }, [product])



  const renderItems = () => {
      return (
        <div className="container ui three stackable cards">
          {updated.map(card => (
            <div className="ui fluid card " key={card._id}>
            <div className="header">
              <h2>{card.title}'s</h2>
            </div>
              <div className="content">
                <img className="ui large image" src={card.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      );
    };


      return (
        <div className = "ui container form" >
        {renderItems()}


        </div>
      )
    }


export default Convert
