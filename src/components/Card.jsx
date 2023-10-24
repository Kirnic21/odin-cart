import { useEffect,useState } from "react"
const Card = (props)=>{
    return(
   <>
        <h1 data-testid = "test-title">{props.title}</h1> 
        <img className="image" src = {props.image}></img>
        <h2>U$ {props.price}</h2>
        </>
    )
}
export default Card