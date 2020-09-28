import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Elements/NavBar';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <button className= "btn btn-primary"> Prueba bootstrap </button>
    </div>
  );
}

export default Home;
