import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Marks from './components/Marks.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Marks' element={<Marks />} />
      </Routes>
    </Router>
  );
};

export default App;
