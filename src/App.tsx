import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainContainer from './components/maincontainer/MainContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />

    </div>
  );
}

export default App;
