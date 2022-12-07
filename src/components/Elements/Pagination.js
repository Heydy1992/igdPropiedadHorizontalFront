import React from 'react';


const Pagination = (props) => {
    //Inicializacion de componente
    const {cunrrentPage, maxPageLimit, MinPageLimit } = props;
    const totalPages = props.response.totalpages-1

    const pages = [];

    
    for(let i=1; i<=totalPages; i ++){
        pages.push(i);
    }


    return (
        <div>


        </div>
    );


};

export default Pagination;