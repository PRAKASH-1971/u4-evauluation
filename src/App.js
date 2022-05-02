import React from 'react';
import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import { Products } from './components/Products';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Homedecor from './components/Homedecor';

function App() {
  return(
 <div className="App">
    <BrowserRouter>
     <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/products' element={<Products/>}/>
           <Route path='/products/men' element={<Men/>}/>
           <Route path='/products/women' element={<Women/>}/>
           <Route path='/products/kids' element={<Kids/>}/>
           <Route path='/products/homedecor' element={<Homedecor/>}/>
     </Routes>
     </BrowserRouter>

 </div>
 );
}

export default App;
