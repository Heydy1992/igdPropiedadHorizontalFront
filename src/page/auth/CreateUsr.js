import React from 'react';
import ContentHeader from '../../components/home/ContentHeader';
import Footer from '../../components/home/Footer';
import NavBar from '../../components/menu/NavBar';
import SidebarContainer from '../../components/menu/SidebarContainer';
import PersonGeneral from '../../components/persons/PersonGeneral';


const CreateUsr = () => {


    return(
        <div className="wrapper">
            <NavBar />
            <SidebarContainer />
           

            <div className="content-wrapper">
                <div className="card card-danger">
                    <div className="card-header">
                        <h3 className="card-title">Creación De Usuarios</h3>
                    </div>
                    <PersonGeneral />
                </div>
            </div>
            <Footer />
        </div>
        
    );
}


export default CreateUsr;