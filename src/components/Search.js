import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios'
import { Card, Rating, Icon, Image } from 'semantic-ui-react'
//
//
const Search = () => {

  const [term, setTerm] = useState("cake")
  const [results, setResults] = useState([])


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
            setResults(data.hits)
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
        <div className="container ui three stackable cards">
          {results.map(card => (
            <div className="ui fluid card " key={card._id}>
            <div className="header">
              <h2>{card.recipe.label}'s {card.recipe.label}</h2>
            </div>
              <div className="content">
                <img className="ui large image" src={card.recipe.image} alt="" />
              </div>
              <div className="flex-row">
                <div className="content">
                <a href={card.recipe.url}> View Recipe </a> <br />
                  <b> Source </b>:  {card.recipe.source} <br />
                  <b> Health </b>: {card.recipe.healthLabels}<br />
                  <b> Calories </b>:{card.recipe.calories}<br />
                </div>
                <hr />
                Rate Recipe:
                <Rating icon='star' defaultRating={3} maxRating={5} />
              </div>
            </div>
          ))}
        </div>
      );
    };




  return (
    <div className = "ui container form" >
      <div className = "field" >
        <label > Enter Term < /label>
        <input
        value = {term}
        onChange = { e => setTerm(e.target.value)}
        className = "input" />
      </div>
      <div className="ui celled list">
      {renderRecipes()}
      </div>
    </div>
  )
}

export default Search




  // const renderItems = () => {
  //     return (
  //       <div className="container ui three doubling stackable cards">
  //         {results.map(card => (
  //           <div className="ui fluid card " key={card._id}>
  //             <div className="content">
  //               <img className="ui medium image" src={card.image} alt="" />
  //             </div>
  //             <div className="flex-row">
  //               <div className="header">
  //                 <h3>{card.title}</h3>
  //               </div>
  //               <div className="meta">
  //                 <i className="dollar sign icon" />
  //                 {card.price}
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   };
    // render() {
    //   return <div className="grid row">{renderItems()}</div>;
    // }

  // const renderedResults = () => {
  //   return (
  //     <Card>
  //     {results.map(item => (
  //       <Image src={item.image} wrapped ui={false} />
  //     ))}
  //     </Card>
  //   )
  // }

  // const renderedResults = results.map( (item) => {
  //   return (
  //
  //     <Card>
  //     <Image src={item.image} wrapped ui={false} />
  //     <Card.Content key={item.id}>
  //       <Card.Header>{item.title}</Card.Header>
  //       <Card.Meta>
  //         <span className='date'>Joined in 2015</span>
  //       </Card.Meta>
  //       <Card.Description>
  //         Matthew is a musician living in Nashville.
  //       </Card.Description>
  //     </Card.Content>
  //     <Card.Content extra>
  //       <a>
  //         <Icon name='user' />
  //         {item.id}
  //       </a>
  //     </Card.Content>
  //   </Card>
  //
  //
  //   )
  //
  // });
  //
  //
  //
  //
