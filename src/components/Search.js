import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Search = () => {

  const [term, setTerm] = useState("")


useEffect( () => {
axios.get("https://en.wikipedia.org/w/api.php", {
  params: {
    action:"query",
    list: "search",
    origin: "*",
    format: "json",
    srsearch: term
  }
})
.then ( (response) => {
  console.log(response);
});
},[term])



  return (
    <div className="ui container form">
      <div className="field">
      <label> Enter Term </label>
      <input
      value={term}
      onChange={e => setTerm(e.target.value)}
      className="input" />
      </div>
    </div>
  )
}

export default Search
