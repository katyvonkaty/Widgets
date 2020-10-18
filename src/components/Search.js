import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios'
import { Card, Icon, Image } from 'semantic-ui-react'
//
//
const Search = () => {

  const [term, setTerm] = useState("cake")
  const [results, setResults] = useState([])


  useEffect(() => {
    const search = async () => {
      const { data  } = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
              params: {
                origin: "*",
                apiKey: "c9cf6dcf2ca94080a3976b3e1280a181",
                format: "json",
                number:25,
                query: term
              }
            });
            setResults(data.results)
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




  const renderedResults = results.map( (item) => {
    return (

      <Card>
      <Image src={item.image} wrapped ui={false} />
      <Card.Content key={item.id}>
        <Card.Header>{item.title}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>


    )

  });








  return (
    <div className = "ui container form" >
      <div className = "field" >
        <label > Enter Term < /label>
        < input
        value = {term}
        onChange = { e => setTerm(e.target.value)}
        className = "input" / >
      </div>
      <div className="ui celled list">
       {renderedResults}
      </div>
    </div>
  )
}

export default Search


//slip advice api


  // useEffect(() => {
  //   const search = async () => {
  //     const { data  } = await axios.get("	https://api.adviceslip.com/advice", {
  //       params: {
  //         list: "search",
  //         origin: "*",
  //         format: "json"        }
  //     });
  //     setResults(data.slip)
  //   };
  //       search()
  //
  // }, [term]);
  //


  // return (
  //   <div className = "ui container form" >
  //     <div className = "field" >
  //       <label > Enter Term < /label>
  //       < input
  //       value = {term}
  //       onChange = { e => setTerm(e.target.value)}
  //       className = "input" / >
  //     </div>
  //     <div className="ui celled list">
  //      {results.advice}
  //     </div>
  //   </div>
  // )
// }
//
// const Search = () => {
//
//   const [term, setTerm] = useState("icing")
//   const [results, setResults] = useState([])
//
//
//   useEffect(() => {
//     const search = async () => {
//       const { data  } = await axios.get("	https://api.adviceslip.com/advice", {
//         params: {
//           list: "search",
//           origin: "*",
//           format: "json",
//           query: term
//         }
//       });
//       setResults(data.slip)
//     };
//
//
//
//         const timeoutId = setTimeout( () => {
//               if(term) {
//                 search()
//               }
//           },3000)
//
//           return () => {
//             clearTimeout(timeoutId);
//           };
//
//
//   }, [term]);
