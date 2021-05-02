import './headerStyle.css'; 
import { Redirect } from 'react-router-dom';
const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <a href="/"><h1 className="logo">give.</h1></a>
            </div>
            <div className="button-container">
                <a href="/signin"><button className="sign-in-button">Sign In</button></a>
                <a href="/signup"> <button className="sign-up-button">Sign Up</button></a>
            </div>
        </div>
    )
}

export default Header;