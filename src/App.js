import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from '../src/page/auth/Login';
import DataContact from './components/DataContact';
import CreateUsr from './page/auth/CreateUsr';
import CreatePerson from './page/person/CreatePerson';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />}/>
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
