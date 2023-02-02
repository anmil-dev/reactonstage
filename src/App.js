import React from 'react';
import { Routes, Route} from 'react-router-dom';
import TicketForm from './components/TicketForm';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      < Header />
      OnStage.
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='./components/TicketForm' element={<TicketForm />} />
      </Routes>
      
    </div>
  );
};

export default App;
