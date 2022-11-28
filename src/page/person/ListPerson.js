import React from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import ListDataTable from '../../components/Elements/ListDataTable';

const ListPerson = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          title={"Listado de propetarios"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Propetarios"}
          route={"#"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Title</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
              
                 
              </div>
            </div>
            <div className="card-body">
              <ListDataTable />
            </div>
            
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ListPerson;
