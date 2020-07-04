import React, {useState} from 'react';
import {Intro} from './Intro';
import Product from './Products';
import './App.css';

function App() {
  let [theme, setTheme] = useState(true);
  return (
    <div className="main">
      <div className={`top_header_b ${theme ? 'top_header_b':'top_header_c'}`}>
        <button onClick={()=>setTheme(!theme)}>Change Theme</button>
        <h4>Current Theme: {theme ? 'Blue Blender': 'Crimson Waffer'}</h4>
      </div>
      <h1>This is Bootcamp2020 Assignment 4</h1>
      <Intro />
      <div className="products">
        <Product name="Story Book" price={150} />
        <Product name="Golden Pen" price={120}/>
        <Product name="Wood Scale" price={25}/>
      </div>
    </div>
  );
}

export default App;
