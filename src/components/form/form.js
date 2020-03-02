/* eslint-disable no-unused-vars */
import React from 'react';
import {useState , useEffect} from 'react';


const Form = () => {

  const [noteBook , setNote] = useState({});

  let testFun = (e) => {
    e.preventDefault();    
    let name = e.target.name.value;
    let note = e.target.note.value;
    let status = e.target.status.value;
    let diff = e.target.difficulty.value;
    let id = Object.keys(noteBook).length.toString();
    
    let newNote = Object.assign({},noteBook);
    newNote[id] = {'name' : name , 'note': note , 'status':status , 'diff': diff};
    
    setNote(newNote);
    e.target.reset();
    
    console.log('after setNote?', noteBook);
    console.log('keys' , Object.keys(noteBook));
  };

  useEffect(()=>{
    let id = Object.keys(noteBook).length.toString() ;

    if(id > 0){
      document.title = `${id} Todo left`;
    }
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


  return(
    <>

      <div>
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
          <button type="submit" >Submit</button>

        </form>
      </div>

      <br/>

      <div>
        <h2>ToDo List:</h2>
        <ul>
          {/* <li>{noteBook}</li> */}
          
          {console.log('boook' , noteBook)}
          { 
            Object.keys(noteBook).map((val, idx) => {
              return<fieldset key={idx} onClick={()=> changeState(idx)} className={noteBook[val].status} > <legend>Name: {noteBook[val].name}</legend>
                <p> ToDo: {noteBook[val].note} </p>
                <li> Status: {noteBook[val].status} </li>
                <li> Difficulty: {noteBook[val].diff} </li>
                
              </fieldset>;
            })}



        </ul>
      </div>

    </>

  
    
  );
};


export default Form ;
