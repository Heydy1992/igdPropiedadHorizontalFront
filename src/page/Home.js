import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../components/menu/NavBar';
import SidebarContainer from '../components/menu/SidebarContainer';
import Footer from "../components/home/Footer";
import ContentHeader from '../components/home/ContentHeader';


const Home = () => {
    return(
        <div className="wrapper">
            <NavBar />
            <SidebarContainer />
            <div className="content-wrapper">
                <ContentHeader
                    title={"DashBoard"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"DashBoard"}
                    route={"#"}
                
                />
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>New Ordes</p>

                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-edit" />
                                    </div>
                                    <Link to={"#"} className="small-box-footer">Más información
                                        <i className="fas fa-arrow-circle-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Home;