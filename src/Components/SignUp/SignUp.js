import "./signUpStyle.css"; 
import firebase from "firebase/app";
import "firebase/auth";
import { Redirect } from "react-router-dom";
import { useState } from "react"; 

const SignUp = () =>{
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [redirect, setRedirect] = useState("");
    const [message, setMessage] = useState("");

    const updateEmail = (e) =>{setEmail(e.target.value)}; 
    const updatePassword = (e) =>{setPassword(e.target.value)}; 
    const updateConfirmedPassword = (e) =>{setConfirmPassword(e.target.value)}; 

    const createUser = (e) => {
        e.preventDefault();
        if (password == confirmPassword){
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Sign Up
            var user = userCredential.user;
    
            // user.updateProfile({
            //   displayName: name,
            // });
    
            //localStorage.setItem("token", "passed!");
            window.location = "/dashboard";
            setRedirect(true);
          })
          .catch((error) => {
            var errorMessage = error.message;
            setMessage(errorMessage);
            setTimeout(() => {
              setMessage("");
            }, 3000);
          });
        }else{
            setMessage("Passwords don't match");
            setTimeout(() => {
              setMessage("");
            }, 3000);
        }
      };

    if(redirect){
        return(
            <Redirect to={"/dashboard"}></Redirect>
        )
    }
    return(
        <div className="signup">
             
            <div className="page-container">
                    <div className="sign-up-half">
                    <div className="logo-container-half">
                        <a href="/"><h1 className="logo black">give.</h1></a>
                    </div>
                    <div className="align-center">
                    <div className="form-container">
                        <h1 className="sign-in-label">Sign Up</h1>
                        <p>{message}</p>
                        <form>
                            <label>Email</label>
                            <br></br>
                            <input type="text" name="email" onChange={updateEmail}></input>
                            <br></br>
                            <label>Password</label>
                            <br></br>
                            <input type="password" onChange={updatePassword}></input>
                            <br></br>
                            <label>Confirm Password</label>
                            <br></br>
                            <input type="password" onChange={updateConfirmedPassword}></input>
                            <br></br>
                            <br></br>
                            <p className="account-message">Have an account? <a href="signin">Sign In</a> </p>
                            <button className="sign-on-button" onClick={createUser}>
                                Sign Up
                            </button>
                        </form>
                    </div>
                    </div>
                </div>

                <div className="image-half-two">
                </div>
            </div>
        </div>
    )
}

export default SignUp;