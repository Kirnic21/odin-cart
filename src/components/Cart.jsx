import { useState,useEffect } from "react";
import Card from "./Card";
const Cart = ()=>{
const [showButton, setShowButton] = useState(true);
const [showForm,setShowForm] = useState(false)
let [item,setItem] = useState([])
useEffect(()=>{
    const fetchData = async ()=>{
        
        const data = await fetch('https://fakestoreapi.com/products?limit=5')
        const dataJson = await data.json();
        dataJson.map((element)=>{
            return element.quantity = 0;
        })
        setItem(dataJson)
        console.log(dataJson)
    }
    fetchData()
},[])

const showFormToggle = (e) => {
    setShowButton(!showButton);
    setShowForm(!showForm);
  }
const decreaseQuantity = (e)=>{
    let newItem = item.map((element)=>{
        
        
        if(element.title === e.target.id)
        {
            if(element.quantity !== 0)
            {
            element.quantity = element.quantity - 1
            }
        }
        return element
    })
    

    setItem(newItem)


}
const increaseQuantity = (e)=>{
  
    let newItem = item.map((element)=>{

        
        if(element.title === e.target.id)
        {
            
            element.quantity = element.quantity + 1
        }
        return element
    })
    

    setItem(newItem)

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

return(
<div className = "cards">
{item.map((items)=>{
    console.log(items.id)
   
    return (
    <div className="item">        
        <Card
        title={items.title}
        image = {items.image}
        price={items.price}
        ></Card>
    <div className = "pricetag">
    <button id = {items.title} data-testid = "minus" onClick={decreaseQuantity}>-</button>
    {showButton && <button id = {items.title} data-testid="price" onClick={showFormToggle}>{items.quantity}</button>}
        {showForm && (
        <form onSubmit ={handleSubmit}>
            <input  data-testid="value2" className="inputNumber" onChange={handleInputChange} type="text" defaultValue={item.quantity} ></input>
        </form>
        )}         
    <button id = {items.title} data-testid = "plus" onClick={increaseQuantity}>+</button>
</div>
</div>
    )                         
        
})}</div>)}

export default Cart;