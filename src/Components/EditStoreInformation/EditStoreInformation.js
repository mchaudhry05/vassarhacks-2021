import { useState } from 'react';
import { useQuery, useTransact, useEntity} from 'homebase-react';

import "./editStoreInformationStyle.css";

const EditStoreInformation = ( { showForm, setShowForm } ) =>{
    const [restaurantName, setRestaurantName] = useState(""); 
    const [restaurantAddress, setRestaurantAddress] = useState("");
    const [restaurantImage, setRestaurantImage] = useState("");

    const updateRestaurantName = (e) => {setRestaurantName(e.target.value);}
    const updateRestaurantAddress = (e) => {setRestaurantAddress(e.target.value);}
    const updateRestaurantImage = (e) =>{setRestaurantImage(e.target.value)};
    
          /**
   * Using Homebase's useEntity API call to get access to all
   * relationships associated with the currentUser identity
   */
  const [currentUser] = useEntity({ identity: "currentUser" });

  /**
   * Using Homebase's useTransact API to create a update/create
   * new stock entity
   */
  const [transact] = useTransact();

    const updateStoreInformation = (e) =>{
        let previousDonation = currentUser.get("id") ? parseFloat(currentUser.get("id")) : 0;
        transact([
            {
              resturant: {
                id: currentUser.get("id"),
                restaurantName: restaurantName, 
                restaurantAddress: restaurantAddress, 
                restaurantImage: restaurantImage, 
                donation: previousDonation
              },
            },
          ]);
        console.log("update");
        //setShowForm(!showForm);
    }

    const closeEditForm = (e) =>{
        setShowForm(!showForm);
    }

    return(
        <div className="EditStoreInformation">
            <div className="edit-form">
                <h2>Edit Restaurant Information</h2>
                    <br></br>
                    <div className="form-container">
                        <label>Restaurant Name</label>
                        <br></br>
                        <input type="text" name="name" onChange={updateRestaurantName}></input>
                        <br></br>
                        <label>Restaurant Address</label>
                        <br></br>
                        <input type="text" name="address" onChange={updateRestaurantAddress}></input>
                        <br></br>
                        <label>Restaurant Image URL Link</label>
                        <br></br>
                        <input type="text" name="address" onChange={updateRestaurantImage}></input>
                    </div>
                    <div className="edit-button-container">
                    <button className="edit-button-center" onClick={updateStoreInformation}>
                                Update
                    </button>
                    </div>
                    <br></br>
                    <p className="account-message" onClick={closeEditForm}>CLOSE</p>
            </div>
        </div>
    )
}

export default EditStoreInformation;