import { useState } from 'react';
import { useQuery, useTransact, useEntity} from 'homebase-react';

const AddForm = ( { showAddForm, setShowAddForm }) =>{
    const [itemName, setItemName] = useState(""); 
    const [itemQuantity, setItemQuantity] = useState(""); 
    const [itemCost, setItemCost] = useState(""); 
    const [itemImage, setItemImage] = useState(""); 

    const updateItemName = (e) =>{ setItemName(e.target.value)};
    const updateItemQuantity = (e) =>{ setItemQuantity(e.target.value)}; 
    const updateImage = (e) =>{ setItemImage(e.target.value)}; 
    const updateItemCost = (e) =>{ setItemCost(e.target.value)}; 

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


    const addItem = (e) =>{
        transact([
            {
              menuItem: {
                resturant: currentUser.get("id"),
                itemName: itemName, 
                itemQuantity: parseInt(itemQuantity), 
                itemImage: itemImage, 
                cost: parseFloat(itemCost)
              },
            },
          ]);
          console.log("added Item")
    }

    const closeAddForm = (e) =>{
        setShowAddForm(!showAddForm);
    }

    return(
        <div className="add-form">
            <div className="edit-form">
                <h2>Add Menu Item</h2>
                    <br></br>
                    <div className="form-container">
                        <label>Item Name</label>
                        <br></br>
                        <input type="text" name="name" onChange={updateItemName}></input>
                        <br></br>
                        <label>Quantity</label>
                        <br></br>
                        <input type="text" name="address" onChange={updateItemQuantity}></input>
                        <br></br>
                        <label>Cost</label>
                        <br></br>
                        <input type="text" name="cost" onChange={updateItemCost}></input>
                        <br></br>
                        <label>Item Image URL Link</label>
                        <br></br>
                        <input type="text" name="address" onChange={updateImage}></input>
                    </div>
                    <div className="edit-button-container">
                    <button className="edit-button-center" onClick={addItem}>
                                Add
                    </button>
                    </div>
                    <br></br>
                    <p className="account-message" onClick={closeAddForm}>CLOSE</p>
            </div>
        </div>
    )
}

export default AddForm;