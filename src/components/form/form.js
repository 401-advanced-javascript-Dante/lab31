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

    let newNote = noteBook ;
    newNote[id] = {'name' : name , 'note': note , 'status':status , 'diff': diff};
    console.log('after id', newNote);

    setNote(newNote);

    console.log('after setNote?', noteBook);
    console.log('keys' , Object.keys(noteBook));
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
          <label>In complete
            <input type="radio" name="status" value="complete" />
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
        <h2>Note List:</h2>
        <ul>
          {/* <li>{noteBook}</li> */}
          
          {console.log('boook' , noteBook)}
          { 
              Object.keys(noteBook).map((val, idx) => {
              console.log('val',val);
              return <li key={idx}> {noteBook[val].name} </li>;
            })}



        </ul>
      </div>

    </>

  
    
  );
};


export default Form ;
