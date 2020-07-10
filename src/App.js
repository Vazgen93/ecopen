import React from 'react';
import PenOrder from './PenOrder/PenOrder';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header 
      home="home"
      about="about"
      library="library"
      workers="workers"
      order="order"
      
      />
      <PenOrder />
    </div>
  );
}

export default App;
