import React, {
  useState,
useEffect
} from "react";

import axios from "axios";

const Bulk = ({product}) => {
  const [updatedBulk, setUpdatedBulk] = useState([])


useEffect (() => {
  const updateProducts = async() => {
    const { data } =  await axios.get("https://api.spoonacular.com/recipes/"+ product.value +"/similar", {
        params: {
          origin: "*",
          apiKey: "c9cf6dcf2ca94080a3976b3e1280a181",
          number:4

        }
      })
      setUpdatedBulk(data)
      console.log(data)
  }
  updateProducts()
}, [product])



});

export default Bulk;
