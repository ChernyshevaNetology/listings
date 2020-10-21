import React from 'react';
import Listings from './components/Listings';
import data from "./data/etsy.json";


function App() {
  return (
    <Listings data={data}/>
  );
}

export default App;
