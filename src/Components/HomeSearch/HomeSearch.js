import './homeSearchStyle.css'; 

const HomeSearch = ( {setSearch} ) =>{
    const updateSearch = (e) =>{
        setSearch(e.target.value);
    }
    return(
        <div className="home-search">
            <h1 className="tagline">Search for Resturants Near You</h1>
            <form>
                <input id="search-bar" className="search-bar" type="text" name="search" placeholder="Search for a resturant" onChange={updateSearch}></input>
            </form>
        </div>
    )
}

export default HomeSearch;