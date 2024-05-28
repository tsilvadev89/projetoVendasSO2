
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemForm from './components/ItemForm/ItemForm';
import Login from './components/Login';
import Home from './components/Home';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/c" element={<ItemForm />} />
      </Routes>
    </Router>
  );
};

export default App;
