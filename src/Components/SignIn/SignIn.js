import './signInStyle.css'; 
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Redirect } from "react-router-dom";

const SignIn = () =>{
    //implement auth sign in procedures 

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");
  const [message, setMessage] = useState("");

  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  const login = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var signedUser = userCredential.user;
        localStorage.setItem("token", "passed!");
        setRedirect("/dashboard");
      })
      .catch((error) => {
        var errorMessage = error.message;
        setMessage(errorMessage);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  };

  if (redirect) {
    localStorage.setItem("token", "passed!");
    return <Redirect to={redirect}></Redirect>;
  }

    return(
        <div className="sign-in">
            <div className="page-container">
                <div className="image-half">
                    <div className="logo-container">
                        <a href="/"><h1 className="logo">give.</h1></a>
                    </div>
                </div>
                <div className="sign-in-half">
                    <div className="form-container">
                        <h1 className="sign-in-label">Sign In</h1>
                        <form>
                            <label>Email</label>
                            <br></br>
                            <input type="text" name="email" onChange={updateEmail}></input>
                            <br></br>
                            <label>Password</label>
                            <br></br>
                            <input type="password" onChange={updatePassword}></input>
                            <br></br>
                            <br></br>
                            <p className="account-message">Don't have an account? <a href="signup">Sign Up</a> </p>
                            <button className="sign-on-button" onClick={login}>
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;