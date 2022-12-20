import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const SearchFilter = () => {

    return(
        <div className="searchFilter">
            <input
                type="text"
                placeholder="Buscar"
                className="texField"
                name="seacrh" 
            />

            <button type="button" className="btn btn-block btn-danger btn-sm" >
                {" "}
                <FontAwesomeIcon icon={faSearch}/>
            
            </button>
        </div>
    );
}

export default SearchFilter;