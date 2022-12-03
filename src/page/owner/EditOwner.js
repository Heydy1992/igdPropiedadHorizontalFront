import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import DepartamentAndCity from "../../components/Elements/DepartamentAndCity";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";

const EditOwner = () => {

  const navigate = useNavigate();

  const { idOwner } = useParams();

  console.log(idOwner);

  return (
    <>
    </>
  );
};


export default EditOwner;