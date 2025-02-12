import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Marks from './components/Marks.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/react-dailytask1/' element={<Login />} />
        <Route path='/react-dailytask1/Marks' element={<Marks />} />
      </Routes>
    </Router>
  );
};

export default App;
