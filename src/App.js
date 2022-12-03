import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from '../src/page/auth/Login';
import Home from "./page/Home";
import ListOwner from './page/owner/ListOwner';
import CreateOwner from './page/owner/CreateOwner';
import EditOwner from './page/owner/EditOwner';
import CreateUsr from './page/auth/CreateUsr';
import ListUsr from  './page/auth/ListUsr';



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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
