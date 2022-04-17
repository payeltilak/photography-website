import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About/About';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';



const App = () => {
  return (
    <div>
    
<Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
     <Footer></Footer>
     
    </div>
  );
};

export default App;