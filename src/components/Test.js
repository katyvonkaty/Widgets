import React from "react";
import axios from 'axios'


const Test = () => {

  const options = {
    method: 'GET',
    url: 'https://api.spoonacular.com/recipes/716429/information?includeNutrition=false',
    params: {
      apiKey: "c9cf6dcf2ca94080a3976b3e1280a181",
      format: "json",
      exclude: 'shellfish, olives'
    }
  };


  axios.request(options).then(function (response) {
  	console.log(response.data.spoonacularScore);
  }).catch(function (error) {
  	console.error(error);
  });

  // const newOne = response.map ( (item) => {
  //   item.spoonacularScore * 2
  // })


  return (
    <h1> hi </h1>
  )
}


export default Test;
