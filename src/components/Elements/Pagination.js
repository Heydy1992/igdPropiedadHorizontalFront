import React from 'react';
import PropTypes from 'prop-types';


const Pagination = (props) => {
    //Inicializacion de componente
    const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;

    pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
    totalRecords = typeof totalRecords ==='number' ? totalRecords : 0;

    pageNeighbours = typeof pageNeighbours === 'number' 
        ?Math.max(0, Math.min(pageNeighbours, 2))
        :0
        

    

    
 

};

export default Pagination;