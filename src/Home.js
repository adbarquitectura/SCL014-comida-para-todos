import React from 'react';
import logo from './logo.svg';
import './Home.css';
import Navbar from './Components/Elements/NavBar';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
    </div>
  );
}

export default Home;
