import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About/About';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';





const App = () => {
  return (
    <div>
    
<Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
     <Footer></Footer>
     
    </div>
  );
};

export default App;