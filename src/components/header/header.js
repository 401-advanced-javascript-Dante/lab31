/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { LoggerContext } from '../../context/logger.js';

const Header = () => {
  const useLogger = useContext(LoggerContext);
  console.log('aha', useLogger);

  const loggerHandler = (e) => {
    e.preventDefault();
    useLogger.logIn(e.target.name.value , e.target.password.value);
    e.target.reset();
  };



  let authBlock ;
  if(useLogger.logState){
    authBlock = <button onClick={useLogger.logOut} >Log Out!</button>;
    
  }else{
    authBlock = <form onSubmit={loggerHandler}>
      <label>
        UserName: <input name='name' />
      </label>
      <label>
        Password: <input type='password' name='password' />
      </label>
      <button type='submit' > LogIn </button>
    </form>;
  }


  return(
    <> 

      <h1> Death Note !</h1>
      {authBlock}


    </>
  );
};


export default Header ;