import React from 'react';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a mi tienda de maquillaje!" />
      <CartWidget />
    </div>
  );
}

export default App;
