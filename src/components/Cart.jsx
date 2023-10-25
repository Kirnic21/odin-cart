import { useState,useEffect } from "react";
import Card from "./Card";
import cartimg from './../assets/cart.png';
import { element, number } from "prop-types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"
const Cart = ()=>{
    let navigate = useNavigate()
    const location = useLocation();
let [reducer,setReduce] = useState(0);

let [item,setItem] = useState([])

useEffect(()=>{
    const fetchData = async ()=>{
        
        const data = await fetch('https://fakestoreapi.com/products?limit=10')
        const dataJson = await data.json();
        dataJson.map((element)=>{
            return element.quantity = 0,
            element.hidden = false;
        })
        setItem(dataJson)
        
        
    }
    fetchData()
},[])

const showFormToggle = (e) => {

   
    let newItem = item.map((element)=>{
        
        
        if(element.title === e.target.id)
        {
            element.hidden = true
            
        }
        return element
    })
    
    setItem(newItem)
    
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
    const itemQuantity = item.map((element)=>{
        return element.quantity
    })
    let initialValue = 0;
    let reduced =  itemQuantity.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    console.log(reduced)
    setReduce(reduced)

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
    const itemQuantity = item.map((element)=>{
        return element.quantity
    })
    let initialValue =0
    let reduced =  itemQuantity.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    console.log(reduced)
    setReduce(reduced)
}
const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target)
    
    let newItem = item.map((element)=>{
        console.log(typeof(element.quantity))
        if(e.target.id === element.title && typeof(element.quantity) === "number")
        {
            element.hidden = false
        }
        return element
    })
    setItem(newItem)
    const itemQuantity = item.map((element)=>{
        return element.quantity
    })
    let initialValue=0
    let reduced =  itemQuantity.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    console.log(reduced)
    setReduce(reduced)  
}
const handleInputChange = (e)=>{
    
    
    let newItem = item.map((element)=>{
        if(e.target.id === element.title)
        {
            console.log(typeof(e.target.value))
            if((e.target.value/e.target.value) !== 1 || parseInt(e.target.value) < 0)
            {
                
                element.quantity = 0;
            }
            else{
            element.quantity = parseInt(e.target.value)
            }
        }
        return element
    })
   setItem(newItem)
}
const FuckThis  = ()=>{
    
    let filteredArray = item.filter((element)=>{
        return element.quantity>0
    })
    navigate('/Payment',{state:{array:{filteredArray}}})
}

return(
    <>
    <div className="cart">
    <img src={cartimg} className="cartimg"></img>
    <h1 data-testid = "cart">{reducer}</h1>
    <button onClick={FuckThis}> Proceed to Purchase</button>
    </div>
<div className = "cards">
{item.map((items)=>{
    return (
    <div className="item">        
        <Card
        title={items.title}
        image = {items.image}
        price={items.price}
        ></Card>
    <div className = "pricetag">
    <button id = {items.title} data-testid = "minus" onClick={decreaseQuantity}>-</button>
    {!items.hidden && <button id = {items.title} data-testid="price" onClick={showFormToggle}>{items.quantity}</button>}
      
        <form id = {items.title} onSubmit ={handleSubmit}>
            { items.hidden && (
            <input id = {items.title}  data-testid="value2" className="inputNumber" onChange={handleInputChange} type="text" defaultValue={item.quantity} ></input>
            )
            }
        </form>
            
    <button id = {items.title} data-testid = "plus" onClick={increaseQuantity}>+</button>
    
</div>
</div>
    )                         
        
})}</div>
</>)}
export default Cart;