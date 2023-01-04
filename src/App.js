import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from '../src/page/auth/Login';
import Home from "./page/Home";
import ListOwner from './page/owner/ListOwner';
import CreateOwner from './page/owner/CreateOwner';
import EditOwner from './page/owner/EditOwner';
import CreateUsr from './page/auth/CreateUsr';
import ListUsr from  './page/auth/ListUsr';
import ListBuilding from './page/building/ListBuilding';
import CreateBuilding from './page/building/CreateBuilding';
import ListCommonArea from './page/commonArea/ListCommonArea';
import CreateCommonArea from './page/commonArea/CreateCommonArea';
import ListTariff from './page/tariff/ListTariff';
import CreateTariff from './page/tariff/CreateTariff';
import ListNews from './page/news/ListNews';
import CreateNews from './page/news/CreateNews';
import ListMaintenance from './page/maintenance/ListMaintenance';
import CreateMaintenance from './page/maintenance/CreateMaintenance';import CreateBilling from './page/billing/CreateBilling';
import ListCoefficient from './page/coefficient/ListCoefficient';
import CreateCoefficient from './page/coefficient/CreateCoefficient';
import ListConcept from './page/concept/ListConcept';
import CreateConcept from './page/concept/CreateConcept';



function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />}/>
          <Route path="/home" exact element={<Home />} />
          <Route path="/listOwner" exact element={<ListOwner/>} />
          <Route path="/createOwner" exact element={<CreateOwner />} />
          <Route path="/editOwner/:idOwner" exact element={<EditOwner />} />
          <Route path="/createUsr" exact element={<CreateUsr />} />
          <Route path="/listUsr" exact element={<ListUsr/>} />
          <Route path="/listBuilding" exact element={<ListBuilding/>} />
          <Route path="/createBuilding" exact element={<CreateBuilding/>} />
          <Route path="/listCommonArea" exact element={<ListCommonArea />} />
          <Route path="/createCommonArea" exact element={<CreateCommonArea/>} />
          <Route path="/listTariff" exact element={<ListTariff />} />
          <Route path="/createTariff" exact element={<CreateTariff />} />
          <Route path="/listNews" exact element={<ListNews />} />
          <Route path="/createNews" exact element={<CreateNews />} />
          <Route path="/listMaintenance" exact element={<ListMaintenance />} />
          <Route path="/createMaintenance" exact element={<CreateMaintenance />} />
          <Route path="/createBilling" exact element={<CreateBilling />} />
          <Route path='/listCoefficient' exact element={<ListCoefficient />} />
          <Route path='/createCoefficient' exact element={<CreateCoefficient />} />
          <Route path='/listConcept' exact element={<ListConcept />} />
          <Route path='/createConcept' exact element={<CreateConcept />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
