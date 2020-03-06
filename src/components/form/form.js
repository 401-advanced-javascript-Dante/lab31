/* eslint-disable no-unused-vars */
import React from 'react';
import {useState , useEffect, useContext} from 'react';
import {DisplayContext} from '../../context/display.js';


const Form = () => {

  const [noteBook , setNote] = useState({});
  const useDisplay = useContext(DisplayContext);

  let testFun = (e) => {
    e.preventDefault();    
    let name = e.target.name.value;
    let note = e.target.note.value;
    let status = e.target.status.value;
    let diff = e.target.difficulty.value;
    let id = Object.keys(noteBook).length.toString();
    
    let newNote = Object.assign({},noteBook);
    newNote[id] = {'id':id, 'name' : name , 'note': note , 'status':status , 'diff': diff};
    
    setNote(newNote);
    e.target.reset();    
  };

  // console.log('context' , useDisplay);

  
  
  useEffect(()=>{
    let id = Object.keys(noteBook).length.toString() ;
    
    if(id > 0){
      document.title = `${id} Todo left`;
    }
    useDisplay.changeFun(Object.keys(noteBook).length);

  });
  
  let changeState = (id) =>{
    id = id.toString();
    let newNote = Object.assign({},noteBook);
    if(newNote[id].status === 'complete'){
      newNote[id].status = 'incomplete';
    }else{
      newNote[id].status = 'complete';
    }
    setNote(newNote);
  };


  let deleteHandler = (id) => {

    id = id.toString();
    let newNote = Object.assign({},noteBook);
    delete newNote[id];
    
    setNote(newNote);
  };

  let preButton ;
  if(useDisplay.next >= 1){
    preButton =  <button onClick= {useDisplay.changePre}> Previous Page </button> ;
  }
  let nextButton ;
  if(Object.keys(noteBook).length > useDisplay.inPage && Object.keys(noteBook).length !== useDisplay.limit){
    nextButton =  <button onClick={useDisplay.changeNext}> Next Page </button> ;
  }




  return(
    <>
      {/* {console.log('test')} */}
      <div>

        <h2> Total: {useDisplay.viewNumber} -=- Show Per Page {useDisplay.inPage} </h2>
        <button onClick={useDisplay.increaseSize}>+</button>
        <button onClick={useDisplay.decreaseSize}>-</button> 

        {/* <DisplayContext.Consumer>
          {
            DisplayContext => (
              // DisplayContext.changeViewNumber(Object.keys(noteBook).length)
              <h1> {DisplayContext.viewNumber} </h1>
            )
          }
        </DisplayContext.Consumer> */}



        <form onSubmit = {testFun}>

          <label>
        Name : 
            <input name="name" />
          </label>

          <br/>

          <label>
        Note :
            <textarea name="note"  />
          </label>

          <br/>

          <label>complete
            <input type="radio" name="status" value="complete" />
          </label>
          <label>Incomplete
            <input type="radio" name="status" value="Incomplete" />
          </label>

          <br/>

          <label>difficulty:
            <select name= "difficulty">
              <option value ="1">1</option>
              <option value ="2">2</option>
              <option value ="3">3</option>
              <option value ="4">4</option>
              <option value ="5">5</option>
            </select>
          </label>

          <br/>
          <button type="submit" id="sub">Submit</button>

        </form>
      </div>

      <br/>

      <div>
        <h2>ToDo List:</h2>
        {preButton}{nextButton}

        <ul>
          {/* <li>{noteBook}</li> */}
          
          {console.log('boook' , noteBook, useDisplay.limit)}
          { 
            Object.keys(noteBook).map((val, idx) => {
              if( idx >= useDisplay.next && idx < useDisplay.limit){

                return<fieldset key={noteBook[val].id}> <legend>Name: {noteBook[val].name}</legend>
                  <p> ToDo: {noteBook[val].note} </p>
                  <li onClick={()=> changeState(idx)} className={noteBook[val].status} > Status: {noteBook[val].status} </li>
                  <li> Difficulty: {noteBook[val].diff} </li>
                  <button onClick={()=> deleteHandler(noteBook[val].id)} >DeleTe!</button>
                
                </fieldset>;
              }
            })}



        </ul>
      </div>

    </>

  
    
  );
};


export default Form ;
