// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/header';
import Help from './pages/help';
import About from './pages/About';
import Home from './pages/Home';
import Loginpg from './pages/Loginpg';
import Footer from './components/footer'
const App = () => {
  return (
   

<>

   <Header/>

      <Routes>
       
        <Route path="Home" element={<Home />} />     
        <Route path="help" element={<Help />} />
        <Route path="About" element={<About />} />
         <Route path="Loginpg" element={<Loginpg />} />
   
      </Routes>
    
     <Footer/>
   </>

  );
};

export default App;
