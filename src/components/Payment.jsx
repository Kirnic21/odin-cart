import { useLocation } from "react-router-dom"
import Card from "./Card"
import { Link,  useNavigate
} from "react-router-dom"

const Payment = (props)=>{
    const navigate = useNavigate();
    const location = useLocation();
    let checkout = location.state.array.filteredArray
    let initialValue = 0;
    let checkoutReduce = checkout.map((element)=>{
        return element.price*element.quantity
    }).reduce((accumulator, currentValue) => accumulator + currentValue, initialValue).toFixed(4)

    
    return(
        <>
        
        <header className = "header">
            <h1>A Certain Reactive Shopping Cart</h1>
            <div className = "buttons">
            <Link className="buttons" to="/">
                        <button className="button">Home</button>
                </Link>
                <button className="buttons" onClick={() => navigate(-1)}>Back to Shopping</button>

            </div>
            </header>
          
        <h1>
            total:
            U$ {checkoutReduce}
            
        </h1>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button>Proceed to purchase</button></a>
        <h1>Checkout:</h1>
        <div className="item">
        {checkout.map((element)=>{
            return(
                <>
                <Card
                title = {element.title}
                image = {element.image}
                price = {element.price}
                ></Card>
                <h1>Quantity:{element.quantity}</h1>
                </>
            )
            
        })}
        </div>
       
        </>

    )
}
export default Payment