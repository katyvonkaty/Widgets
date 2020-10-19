import React, {
  useState,
  useEffect
} from "react";
import axios from "axios"

const Convert = ({product,text}) => {
  const [updated, setUpdated] = useState("")

  useEffect(() => {
    const updateProducts = async() => {
    const { data } =  await axios.get("https://api.spoonacular.com/recipes/"+ product.value +"/similar", {
        params: {
          origin: "*",
          apiKey: "c9cf6dcf2ca94080a3976b3e1280a181"
        }
      })
      setUpdated(data[0].title);
    }

    updateProducts();

  }, [product, text])
  return (
    <div>
    <h1> {updated} </h1>
    </div>
  )
}

export default Convert
