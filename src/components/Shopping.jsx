import { Link } from "react-router-dom"
import Cart from "./Cart"
import { useNavigate } from "react-router-dom"
function Shopping(){
    return(
        <>
        <header className = "header">
            <h1>A Certain Reactive Shopping Cart</h1>
            <div className = "buttons">
            <Link className="buttons" to="/">
                        <button className="button">Home</button>
                </Link>

                     
            
                
                   
            </div>
            </header>
            <Cart></Cart>
          </>  
    )

}
export default Shopping