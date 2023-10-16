import { useEffect,useState } from "react"
const Pricetag = ()=>{
    let [quantity,setQuantity] = useState(0)
    const [showButton, setShowButton] = useState(true);
    const [showForm,setShowForm] = useState(false)
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
    return(
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
    )
}
export default Pricetag