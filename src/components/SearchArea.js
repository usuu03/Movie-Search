import React from "react";





const SearchArea = ({searchTerm, movieSearch, searchChange}) => {

    return(
        <div className="bg-light-gray flex items-center justify-between pa0">
         
            <h1 className="light-red ma3">Movie Database</h1>
           
            <div className="flex items-center ma3">
                <input className="pa2 ba b--black-05" type="search" 
                placeholder="Search a movie"
                onChange={searchChange}
                />
                <button className="red btn btn-primary pa2 ba b--black-05  bg-silver pointer" onClick={movieSearch}>Search</button>

            </div>
            
        </div>
    )

}

export default SearchArea;

