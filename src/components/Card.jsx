import { useEffect,useState } from "react"

const Card = (props)=>{
    let [item,setItem] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            
            const data = await fetch('https://fakestoreapi.com/products/'+props.id)
            const dataJson = await data.json();
            setItem(dataJson)
        
        
        }
        fetchData()
    },[])
    
    return(
        <div className = "card">
        <h1 >{item.title}</h1> 
        </div>
    )
}
export default Card