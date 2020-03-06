/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
export const DisplayContext = React.createContext() ;

function DisplayProvider(props){

  const [viewNumber , setViewNumber] = useState(0);
  const [inPage, setInPage] = useState(1);
  const [next , setNext] = useState(0);
  const [limit , setLimit] = useState(1);

  const changeFun = (data)=>{
    setViewNumber(data);
  };

  const increaseSize = () => {
    let add = inPage +1 ;
    setInPage(add);
    setLimit(add);
  };

  const decreaseSize = () => {
    if(inPage > 1){
      let add = inPage -1 ;
      setInPage(add);
      setLimit(add);

    }
  };


  const changeNext= ()=>{
    let add = limit;
    setNext(add);
    add = limit + inPage;
    setLimit(add);
  };

  const changePre = ()=> {
    let add = next - inPage;
    setNext(add);
    add = limit - inPage;
    setLimit(add);
  };




  const keys = {changePre,limit,changeNext, next ,viewNumber ,changeViewNumber:setViewNumber , changeFun , increaseSize , decreaseSize , inPage};


  return(
    <DisplayContext.Provider value = {keys}>
      {props.children}
    </DisplayContext.Provider>
  );

}

export default DisplayProvider ;
