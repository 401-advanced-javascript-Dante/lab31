import React, {useState , useEffect} from 'react';
import cookie from 'react-cookies' ;
import jwt from 'jsonwebtoken';

export const LoggerContext = React.createContext() ;

const API = 'https://yalla-server401.herokuapp.com';
const SECRET = 'Shushhhhh' ;



 

function LoggerProvider(props){

  const [logState , setLogState] = useState(false);
  const [user , setUser] = useState({});

  
  const validateToken = (token , userName)=>{
    try{
      let user = jwt.verify(token, SECRET);
      cookie.save('auth', token);
      setLogState(user);
      setUser(userName);
    }catch{
      setLogState(false);
      console.error('token Invalid!!!');
    }
  };
  

  const logIn = (userName , password) => {

    console.log('in logIn' , userName , password);
    fetch(`${API}/signin`,{
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        'Authorization': `Basic ${btoa(`${userName}:${password}`)}`,
      }),
    })
      .then(res => res.text())
      .then(token => validateToken(token , userName))
      .catch(console.error);
  };


  const logOut = ()=>{
    setLogState(false);
    setUser({});
    cookie.save('auth', null);
  };


  // to stay login after refresh 
  useEffect(()=>{
    const cookieToken = cookie.load('auth');
    const qs = new URLSearchParams(window.location.search);
    const token = qs.get('token') || cookieToken || null ;
    validateToken(token);
  },[]);

  const keys = {logState , logIn , logOut ,user};


  return(
    <LoggerContext.Provider value = {keys}>
      {props.children}
    </LoggerContext.Provider>
  );

}

export default LoggerProvider ;