import "./decrementModalStyle.css"; 
import { useQuery, useTransact, useEntity} from 'homebase-react';

const DecrementModal = ( { setShowModal, itemID } ) => {
    const [currentUser] = useEntity({ identity: "currentUser" });
    const [transact] = useTransact();

    const [menuItems] = useQuery({
        $find: "menuItem",
        $where: { menuItem: { resturant: currentUser.get("id") } },
    });

  

    const decrement = (e) =>{
        if(e.target.checked){
            let previousQuantity = 0; 
            for(let i = 0; i < menuItems.length; i++){
                if(parseInt(menuItems[i].get("id")) === parseInt(itemID)){
                    previousQuantity = menuItems[i].get("itemQuantity");
                    break;
                }
            }
            transact([
                {
                  menuItem: {
                    id: parseInt(itemID),
                    itemQuantity: previousQuantity - 1, 
                  },
                },
              ]);
        }
        setShowModal(false);
    }
    
    const updateDonation = (e) => {
        if(e.target.checked){
            let previousQuantity = 0; 
            let donationAmount = 0;
            for(let i = 0; i < menuItems.length; i++){
                if(parseInt(menuItems[i].get("id")) === parseInt(itemID)){
                    previousQuantity = menuItems[i].get("itemQuantity");
                    donationAmount = parseFloat(menuItems[i].get("cost"));
                    break;
                }
            }
            transact([
                {
                  menuItem: {
                    id: parseInt(itemID),
                    itemQuantity: previousQuantity - 1, 
                  },
                },
              ]);
            let previousDonation = currentUser.get("donation") ? parseFloat(currentUser.get("donation")): 0;
              transact([
                {
                  resturant: {
                    id: currentUser.get("id"),
                    donation: previousDonation + donationAmount
                  },
                },
              ]);
        }
        setShowModal(false);
    }

    const closeModal = (e) =>{
        setShowModal(false);
    }

    return(
        <div className="decrement-modal">
            <div className="modal-content">
               
            <span className="close" onClick={closeModal}>
                CLOSE
            </span> 
            <h3 className="reason-label">Reason</h3>
            <input type="checkbox" name="meal" className="check" onChange={updateDonation}></input>
            <label>Person Picked Up Meal</label>
           
            <br></br>
            <input type="checkbox" name="wrong" className="check" onChange={decrement}></input>
            <label>Wrong quantity</label>
            
            </div>
        </div>
    )
}

export default DecrementModal;