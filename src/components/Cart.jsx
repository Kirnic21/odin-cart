import { useState,useEffect } from "react";
import Card from "./Card";
const Cart = ()=>{
const [showButton, setShowButton] = useState(true);
const [showForm,setShowForm] = useState(false)
 let [item,setItem] = useState([])
 let [quantity,setQuantity] = useState(0)
useEffect(()=>{
    const fetchData = async ()=>{
        
        const data = await fetch('https://fakestoreapi.com/products?limit=5')
        const dataJson = await data.json();
        setItem(dataJson)
        console.log(item)
    
    }
    fetchData()
},[])

const showFormToggle = (e) => {
    setShowButton(!showButton);
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
    if(parseInt(quantity)<0)
    {
        quantity = 0
        setQuantity(quantity);
    }
    setShowForm(false)
    setShowButton(!showButton)
}
const handleInputChange = (e)=>{
    
    e.preventDefault()
    quantity = e.target.value;
    setQuantity(quantity)
}
console.log(item)
return(<div className = "cards">
{item.map((items)=>{
   
    return (
    <div className="item">        
        <Card
        title={items.title}
        ></Card>
    <div className = "pricetag">
    <button onClick={decreaseQuantity}>-</button>
    {showButton && <button data-testid="price" onClick={showFormToggle}>{quantity}</button>}
        {showForm && (
        <form onSubmit ={handleSubmit}>
            <input className="inputNumber" onChange={handleInputChange} type="text" defaultValue={quantity} ></input>
        </form>
        )}         
    <button onClick={increaseQuantity}>+</button>
</div>
</div>
    )
        
})}</div>)}

export default Cart;