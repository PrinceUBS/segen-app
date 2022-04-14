import React from 'react';
import './App.css';
import { HomePage } from './pages';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
