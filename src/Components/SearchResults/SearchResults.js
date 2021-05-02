import "./searchResultsStyle.css";
import { useEffect, useState } from 'react';
import { useQuery, useTransact, useEntity} from 'homebase-react';
import data from "./restaurants.json";

const SearchResults = ( { search } ) =>{
   const [showFood, setShowFood] = useState(false); 
   const [picked, setPicked] = useState(false);
   const updateShowFood = (e) =>{

        setPicked(parseInt(e.target.id));
   }
    return(
        <div className="search-results">
            <h1 className="label">Restaurants Giving Away Food</h1>
            {data.DATA.RESTAURANTS.filter(i => i.address.toLowerCase().includes(search.toLowerCase()))
            .map(item => (
                <div className="store-card">
                        <div className="store-image">
                            <img className="store-img margins-left" src={item.img}></img>
                        </div>
                        <div className="store-info">
                            <h3>Restaurant: {item.name}</h3>
                            <h3>Address: {item.address} </h3>
                            {picked === item.id &&
                            <>{ item.food.details.length > 0 ?
                                <div className="item">
                                <div className="image-container">
                                    <img className="food-img" src={item.food.details[2]}></img>
                                </div>
        
                                <div className="name-container">
                                    <h3>{item.food.details[1]}</h3>
                                </div>
                                <div className="quantity-container">
                                    
                                    <div className="quantity">
                                        <h3>{item.food.details[0]}</h3>
                                    </div>
                                   
                                </div>
                                
                            </div> :
                            <p className="account-message">No Food Donations!</p>
                            }
                            </>
                            }
                            <button id= {item.id} className="show-food-button" onClick={updateShowFood}>{showFood ? "Close" : "Show Food"}</button>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default SearchResults;

