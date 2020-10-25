import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios'
import { Card, Grid, Segment, Rating, Icon,Input, Image } from 'semantic-ui-react'
//
//
const Search = () => {

  const [term, setTerm] = useState("Search...")
  const [results, setResults] = useState([])
  let count = ""

  useEffect(() => {
    const search = async () => {
      const { data  } = await axios.get("https://api.edamam.com/search", {
              params: {
                origin: "*",
                app_key: "da96a3891d33624da41d6f384f8e8f97",
                format: "json",
                app_id:"9c09b038",
                q: term

              }
            });
            // console.log(data.hits);
            setResults(data.hits);
            count = data.count;
          };

          if (term && !results) {
            search()
          } else {
            const timeoutId = setTimeout( () => {
                  if(term) {
                    search()
                  }
              },100)

              return () => {
                clearTimeout(timeoutId);
              };
          }

  }, [term]);

  const renderRecipes = () => {
      return (

        <div className="container ui four stackable cards">
          {results.map(card => (
            <div className="ui fluid card " key={card._id}>
              <a href={card.recipe.url}>

              <div className="content">
                <img className="ui large image" src={card.recipe.image} alt="" />
              </div>
              <div className="header">
                <h4>{card.recipe.label}</h4>
                <p> {count} </p>

                <Rating icon='star' defaultRating={4} maxRating={5} />
              </div>
              <div className="flex-row">
                <div className="content">
                  <b> Source </b>:  {card.recipe.source} <br />
                  <b> Servings </b>:  {card.recipe.yield} <br />
                  <b> Health</b>: {card.recipe.healthLabels}<br />
                  <b> Calories</b>:{card.recipe.calories.toFixed(0)}<br />
                </div>

              </div>
                    </a>
            </div>
          ))}
        </div>

      );
    };




  return (
    <div className = "ui container form" >
      <div className = "field" >
        <Input icon='search'
        value = {term}
        onChange = { e => setTerm(e.target.value)}
        className = "input" />
      </div>
      <div className="ui celled list">
      {renderRecipes()}
      {count}
      </div>
    </div>
  )
}

export default Search
