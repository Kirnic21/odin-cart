import { useEffect,useState } from "react"
import Pricetag from "./Pricetag"
const Card = (props)=>{
    
    return(
        <div className = "card">
        <h1 className ="title">{props.title}</h1>
        <img className ="image" src = {props.image}></img>
        <h3 className="price">U$ {props.price}</h3>
            <Pricetag></Pricetag>
        </div>
    )
}
export default Card