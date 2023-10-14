import { useEffect,useState } from "react"
const Card = (props)=>{
    return(
        <div className = "card">
        <h1 className ="title">{props.title}</h1>
        <img className ="image" src = {props.image}></img>
        </div>
    )
}
const Cards = ()=>{
    let [item,setItem] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await fetch('https://fakestoreapi.com/products?limit=10')
            const dataJson = await data.json();
            setItem(dataJson)
        }
        fetchData()
    },[])
    return(
        <div className = "cards">
                {item.map((items)=>{
                    return (<Card
                    title={items.title}
                    image={items.image}>
                    </Card>)
                })}
                
        </div>
    )
}
export default Cards