import { Link } from "react-router-dom"
import Cart from "./Cart"
function Shopping(){
    return(
        <>
        <header className = "header">
            <h1>A Certain Reactive Shopping Cart</h1>
            <div className = "buttons">
            <Link className="buttons" to="/">
                        <button className="button">Home</button>
                </Link>
            
            <a className="button" href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <button>Payment</button>
            </a>                            
            
                
                   
            </div>
            </header>
            <Cart></Cart>
          </>  
    )

}
export default Shopping