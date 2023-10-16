import { useEffect,useState } from "react"
import Card from "./Card"
const Cards = ()=>{
    let [item,setItem] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await fetch('https://fakestoreapi.com/products?limit=10')
            const dataJson = await data.json();
            console.log(dataJson)
            setItem(dataJson)
        }
        fetchData()
    },[])
    return(
        <div className = "cards">
                {item.map((items)=>{
                    return (<Card
                    title={items.title}
                    image={items.image}
                    price={items.price}
                    key = {items.id}>
                    
                    </Card>)
                })}
                
        </div>
    )
}
export default Cards