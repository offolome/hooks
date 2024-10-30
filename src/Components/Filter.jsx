import React from "react";

const Filter = () => {
    return(
        <>
            <div className="searchBar">
                <input type="text" className="search" placeholder="recherche" />
            </div>
            <div className="search-results">
                <div className="search-result">données</div>
            </div>
        </>
    );
}

export default Filter;