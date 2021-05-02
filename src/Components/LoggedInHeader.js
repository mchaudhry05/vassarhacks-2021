import firebase from "firebase/app";
import { useClient } from "homebase-react";

const LoggedInHeader = () =>{

    const [client] = useClient();
  const signOut = (e) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("token");
        client.dbFromString(window.emptyDB);
      })
      .catch((error) => {
        alert(error);
      });
  };

    return(
             <div className="header">
            <div className="logo-container">
                <a href="/"><h1 className="logo black">give.</h1></a>
            </div>
            <div className="button-container">
                <a href="/"> <button className="sign-up-button" onClick={signOut}>Sign Out</button></a>
            </div>
            </div>
    )
}

export default LoggedInHeader;