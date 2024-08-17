import './App.css';
//import { useState, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ContextProvider } from './contexts/AuthContext';

import About from './components/About/About';
import Catalog from './components/Catalog/Catalog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header/Header';
import Home from './components/Home/Home';

import Testimonial from './components/Testimonial/Testimonial';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Create from './components/Create/Create';
import PageNotFound from './components/404/PageNotFound';
import Profile from './components/Profile/Profile/Profile';
import ProfileEdit from './components/Profile/ProfileEdit/ProfileEdit';
 //import Loader from './components/Loader/Loader';


function App() {
  return (
    <>
      <ContextProvider>
      
        <div className="main-layout">

          {/* <!---loader ---> */}
          {/* <Loader /> */}


          <div className="wrapper">

            <Header />
           
            <div id="content">
             
            
            
              <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/choose' element={<ChooseUs />} />
                <Route path='/about' element={<About />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/details/:carId' element={<Details />} />
                <Route path='/edit/:carId' element={<Edit />} />
                <Route path='/create' element={<Create />} />
                <Route path='/testimonial' element={<Testimonial />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/profile/edit/:id' element={<ProfileEdit />} />
                <Route path='*' element={<PageNotFound />} />

               </Routes>
              
            </div>
            <Footer />
          </div>

          <div className="overlay"></div>
        </div>
      </ContextProvider>
    </>

  );
}

export default App;
