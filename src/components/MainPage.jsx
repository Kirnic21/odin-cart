import image from '../assets/Tokyo.jpg'
import { BrowserRouter, Link } from "react-router-dom";


const MainPage = ()=>{
    return(
        <>
        <header className = "header">
            <h1>A Certain Reactive Shopping Cart</h1>
            <div className = "buttons">
                
                        <Link className='buttons' to="Shopping">
                        <button className="button">Go Shop</button>
                        </Link>
                        
                        
                   
            </div>
            </header>
            
            <img className='tokyo' src={image} alt="Logo" />;
            <div className = "textInImage">
                <h1>Welcome to the Cart</h1>
                <p>Yeah i have no idea on what to put here</p>
            </div>
            </>
    )
}
export default MainPage;