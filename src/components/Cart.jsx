import { useState,useEffect } from "react";
import Card from "./Card";
const Cart = ()=>{
let [quantity,setQuantity] = useState([])
const [showButton, setShowButton] = useState(true);
const [showForm,setShowForm] = useState(false)
let a =[]
for(let i = 1;i <11;i++)
{
    a.push(i)
}
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

return(<div className = "cards">
{a.map((items)=>{
    return (
    <div className="item">        
        <Card
        id={items}
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