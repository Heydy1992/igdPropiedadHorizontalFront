import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from '../src/page/auth/Login';
import CreateUsr from './page/auth/CreateUsr';
import Home from "./page/Home";


function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />}/>
          <Route path="/home" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
