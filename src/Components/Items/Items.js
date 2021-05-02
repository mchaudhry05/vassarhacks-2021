import { useQuery, useTransact, useEntity} from 'homebase-react';
import "./itemsStyle.css"; 

const Items = ( { setShowModal, setItemID } ) =>{
     /**
     * Using Homebase's useEntity API call to get access to all
     * relationships associated with the currentUser identity
     */
    const [currentUser] = useEntity({ identity: "currentUser" });
    const [menuItems] = useQuery({
        $find: "menuItem",
        $where: { menuItem: { resturant: currentUser.get("id") } },
    });
    console.log(menuItems)

    //const [currentUser] = useEntity({ identity: "currentUser" });
    const [transact] = useTransact();

    var increment = (e) =>{
        let previousQuantity = 0; 
        for(let i = 0; i < menuItems.length; i++){
            if(parseInt(menuItems[i].get("id")) === parseInt(e.target.id)){
                previousQuantity = menuItems[i].get("itemQuantity");
                break;
            }
        }
        transact([
            {
              menuItem: {
                id: parseInt(e.target.id),
                itemQuantity: previousQuantity + 1, 
              },
            },
          ]);

    }

    const decrement = (e) =>{
        setItemID(parseInt(e.target.id));
        setShowModal(true);
    }

    return(
        <div className="items">
            <h1 className="section-name margins">Food Donations</h1>
            { menuItems.length > 0 ?
                menuItems.filter(menu => parseInt(menu.get("itemQuantity")) !== 0)
                .map(item =>(
                    <div className="menu-item">
                        <div className="image-container">
                            <img  className="food-img" src={item.get("itemImage")}></img>
                        </div>

                        <div className="name-container">
                            <h3>{item.get("itemName")}</h3>
                        </div>
                        <div className="quantity-container">
                            <div className="decrement">
                               <button className="change-button" onClick={decrement}><h1 id={item.get("id")}>-</h1></button>
                            </div>
                            <div className="quantity">
                                <h3>{item.get("itemQuantity")}</h3>
                            </div>
                            <div className="increment">
                                <button className="change-button" onClick={increment}><h1 id={item.get("id")}>+</h1></button>
                            </div>
                        </div>
                        
                    </div>
                ))
                :
                <h1>You haven't listed any donations!</h1>
            }
        </div>
    )
}

export default Items;