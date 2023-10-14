import { useEffect,useState } from "react"
const Card = (props)=>{
    let [quantity,setQuantity] = useState(0)
    const [showForm,setShowForm] = useState(false)
    const showFormToggle = () => {
        setShowForm(!showForm);
      }
    const decreaseQuantity = (e)=>{
        e.preventDefault();
        if(quantity > 0)
        {
        quantity--;
        setQuantity(quantity);
        }
    }
    const increaseQuantity = (e)=>{
        e.preventDefault();
        quantity++;
        setQuantity(quantity);
    }
    const handleSubmit = (e)=>{
        
        e.preventDefault()
            
    }
    const handleInputChange = (e)=>{
        
        e.preventDefault()
        quantity = e.target.value;
        setQuantity(quantity)
    }
    return(
        <div className = "card">
        <h1 className ="title">{props.title}</h1>
        <img className ="image" src = {props.image}></img>
        <h3 className="price">U$ {props.price}</h3>
        
            <button id = {props.id} onClick={decreaseQuantity}>-</button>
                <button onClick={showFormToggle}>{quantity}</button>
                {showForm && (
                <form onSubmit ={handleSubmit}>
                    <input onChange={handleInputChange} type="number" defaultValue={quantity} ></input>
                </form>
                )}         
            <button id = {props.id} onClick={increaseQuantity}>+</button>
    
        </div>
    )
}
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