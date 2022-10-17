import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from '../src/page/auth/Login';
import CreateUsr from './page/auth/CreateUsr';
import CreatePerson from './page/persons/CreatePerson';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<CreatePerson />}/>
          <Route path="/createUsr" exact element={<CreateUsr />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
