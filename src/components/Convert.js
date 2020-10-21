import React, {
  useState,
  useEffect
} from "react";
import axios from "axios"
import { Grid, Card, Icon, Image } from 'semantic-ui-react'


const Convert = ({product}) => {
  const [updated, setUpdated] = useState("")

  useEffect(() => {
    const updateProducts = async() => {
    const { data } =  await axios.get("https://api.spoonacular.com/recipes/"+ product.value +"/information", {
        params: {
          origin: "*",
          apiKey: "c9cf6dcf2ca94080a3976b3e1280a181",
          number:4

        }
      })
      setUpdated(data);
      console.log(data);
    }
    updateProducts();

  }, [product])



  return (
    <div className = "ui container">
    <Grid>
      <Grid.Row columns={4}>
        <Grid.Column>
            <Card>
                <Image class="ui large" src= {updated.image} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{updated.title}</Card.Header>
                    <Card.Meta>{updated.cuisines}</Card.Meta>
                    <Card.Description>
                      <b> Ready in: </b> {updated.readyInMinutes} <br/>
                      <b> Price per serving: </b>$ {updated.pricePerServing} <br />
                      <b> Servings: </b> {updated.servings} <br />
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a href={updated.sourceURL}>
                    View Recipe
                    </a>
                  </Card.Content>
              </Card>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    </div>

  )
}

export default Convert
