/* eslint-disable no-unused-vars */
// dependencies 
import React from 'react';

// components 
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';

// Context 
import Display from './context/display.js';
import Logger from './context/logger.js';

//style
import './app.scss';



const App = ()=>{


  return(
    <>
      <Logger>
        <Display>

          <Header />
          <Form />
          <Footer />
          
        </Display>
      </Logger>
    </>
  );
};

export default App ;
