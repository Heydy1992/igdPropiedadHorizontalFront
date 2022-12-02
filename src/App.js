import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from '../src/page/auth/Login';
import Home from "./page/Home";
import ListOwner from './page/owner/ListOwner';
import CreateOwner from './page/owner/CreateOwner';
import EditOwner from './page/owner/EditOwner';



function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />}/>
          <Route path="/home" exact element={<Home />} />
          <Route path="/listOwner" exact element={<ListOwner/>} />
          <Route path="/createOwner" exact element={<CreateOwner />} />
          <Route path="/EditOwner" exact element={<EditOwner />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
