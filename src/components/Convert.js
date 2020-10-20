import React, {
  useState,
  useEffect
} from "react";
import axios from "axios"
import { Card, Icon, Image } from 'semantic-ui-react'


const Convert = ({product}) => {
  const [updated, setUpdated] = useState([])

  useEffect(() => {
    const updateProducts = async() => {
    const { data } =  await axios.get("https://api.spoonacular.com/recipes/"+ product.value +"/similar", {
        params: {
          origin: "*",
          apiKey: "c9cf6dcf2ca94080a3976b3e1280a181"
        }
      })
      setUpdated(data);
    }
    updateProducts();

  }, [product])

  const updatedProduct = updated.map( (item) => {
    return (
      <Card>
      <Card.Header>{item.title}</Card.Header>
        <Card.Content key={item.id}>
        </Card.Content>
        <Card.Description>
        <p> Ready In </p> {item.readyInMinutes} | <p> Servings: </p>{item.servings}
         </Card.Description>
         <Card.Content extra>
           <a href={item.sourceURL}>
            <p> Click Here </p>
           </a>
         </Card.Content>
      </Card>
    )

  });




  return (
    <div>
    {updatedProduct}
    </div>
  )
}

export default Convert


// {updated.map (item => <div> {item.title} </div>)}
