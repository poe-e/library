import './App.css';
import React, { useState } from 'react';
import Popup from './components/addBookPopUp';

function App() {
  const [myLibrary, setLibrary] = useState([
    {
    name: 'Test1',
    author:'Author',
    pages: '123',
    bookRead:true
  },
  {
    name: 'Test2',
    author:'Author',
    pages: '123',
    bookRead:false
  },
  {
    name: 'Test3',
    author:'Author',
    pages: '123',
    bookRead:true
  },
  {
    name: 'Test3',
    author:'Author',
    pages: '123',
    bookRead:false
  }]);

  const [popup, setPopup] = useState(false);

  function togglePopup(){
    setPopup(!popup);
  }

  function Book(){

  }
  function addBookToLibrary(){
    console.log('adding')
  }
  function removeBookFromLibrary(e){
    myLibrary.splice(e.target.id, 1);
    setLibrary([...myLibrary]);
  }
  function changeReadStatus(e){
    myLibrary[e.target.id].bookRead = !myLibrary[e.target.id].bookRead;
    setLibrary([...myLibrary]);
  }

  return (
    <div className="App">
      <header>
        <div className="headContainer">
          <h1 style={{fontSize: "50px"}}>library</h1>
          <button className="button-28">Log in</button>
        </div>
      </header>
      
      <div className='mainContainer'>
        <button className='button-29' id='addBook' onClick={()=>{togglePopup();}}>Add Book</button>
        <div className='bookContainer'>
            {myLibrary.map((item, index)=>(
              <div key={index} className='book'>
                <p>{item.name}</p>
                <p>{item.author}</p>
                <p>{item.pages}</p>
                <div className='buttons'>
                  <button className={item.bookRead ? 'read' : 'notRead'} id={index} onClick={(e)=>{changeReadStatus(e)}}>{item.bookRead ? 'Read' : 'Not Read'}</button>
                  <button className='remove' onClick={(e)=>removeBookFromLibrary(e)}>Remove</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
