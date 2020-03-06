/* eslint-disable no-unused-vars */
// dependencies 
import React from 'react';

// components 
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Display from './context/display.js';

//style
import './app.scss';



const App = ()=>{


  return(
    <>
      <Header />
      
      <Display>
        <Form />
      </Display>

      <Footer />
    </>
  );
};

export default App ;
