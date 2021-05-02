import Header from '../Header/Header';
import HomeSearch from '../HomeSearch/HomeSearch';
import SearchResults from '../SearchResults/SearchResults';
import { useState } from 'react';
import './homeStyle.css'; 

const Home = () =>{
    const [search, setSearch] = useState("");
    return(
        <div className="home">
            <Header/>
            <HomeSearch setSearch={setSearch}/>
            <SearchResults search={search}/>
        </div>
    )
}

export default Home;