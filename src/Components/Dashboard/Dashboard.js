import "./dashboardStyle.css"; 
import { useState } from 'react'; 
import EditStoreInformation from "../EditStoreInformation/EditStoreInformation";
import AddForm from "../AddForm/AddForm";
import { useQuery, useTransact, useEntity} from 'homebase-react';
import Items from "../Items/Items";
import DecrementModal from "../DecrementModal/DecrementModal";

const Dashboard = () =>{
    const [showForm, setShowForm] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const [modal, setShowModal] = useState(false); 
    const [totalDonation, setTotalDonation] = useState(0);
    const [itemID, setItemID] = useState(0);

    const openEditForm = (e) =>{
        e.preventDefault();
        setShowForm(!showForm);
    }

    const openAddForm = (e) =>{
        e.preventDefault();
        setShowAddForm(!showAddForm);
    }

    const [currentUser] = useEntity({ identity: "currentUser" });

//console.log(currentUser.get("restaurantAddress"));
    return(
        
        <div className="dashboard">
            <h1 className="section-name">Dashboard</h1>
            {/* <div className="information-holder"> */}
            { showForm ? 
            <EditStoreInformation showForm={showForm} setShowForm={setShowForm}/> :
            <div className="details-about-store">
                <div className="restaurant-info">
                <h2>Your Restaurants Information</h2>
                <button className="edit-button" onClick={openEditForm}>
                    
                    EDIT
                  </button>
                  </div>
                <div className="image-of-store">
                    <img className="store-img" src={currentUser.get("restaurantImage")}></img>
                </div>
                <div className="store-information">
                    <h3>Restaurant Name: {currentUser.get("restaurantName")}</h3>
                    <h3>Address: {currentUser.get("restaurantAddress")}</h3>
                    <h3>Total Donated Amount: ${currentUser.get("donation") ? currentUser.get("donation").toFixed(2) : currentUser.get("donation")} </h3>
                </div>
            </div>
            }
            {modal && <DecrementModal setShowModal={setShowModal} itemID={itemID}/>}
            {showAddForm ? 
            <AddForm showAddForm={showAddForm} setShowAddForm={setShowAddForm}/> :
            <div className="add-button-container">
                <button className="add-button" onClick={openAddForm}>Add</button>
            </div>}
            <Items setShowModal={setShowModal} setItemID={setItemID}/>
            {/* <div className="menu-item"></div>
            <div className="menu-item"></div>
            <div className="menu-item"></div>
            <div className="menu-item"></div> */}
        </div>
    )
}

export default Dashboard;