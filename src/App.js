import './App.css';
import React, { useState } from 'react';
import Popup from './components/Popup';

function App() {

  const [myLibrary, setLibrary] = useState(
    JSON.parse(localStorage.getItem('library')) || []
  );
  const [popup, setPopup] = useState(false);

  function testFunction(){
    console.log(JSON.stringify(myLibrary));
  }

  function addBookToLibrary(bookToAdd){
    console.log(bookToAdd)
    myLibrary.push(bookToAdd);
    localStorage.setItem('library', JSON.stringify(myLibrary));
    setLibrary([...myLibrary]);
  }
  function removeBookFromLibrary(e){
    console.log(e.target);
    console.log(e.target.id)
    myLibrary.splice(e.target.id, 1);
    localStorage.setItem('library', JSON.stringify(myLibrary));
    setLibrary([...myLibrary]);
  }
  function changeReadStatus(e){
    myLibrary[e.target.id].bookRead = !myLibrary[e.target.id].bookRead;
    setLibrary([...myLibrary]);
  }

  return (
    <div className="App">
      <header className='header'>
        <div className="headContainer">
          <h1 style={{fontSize: "50px"}}>library</h1>
          <button className="button-28" onClick={()=>testFunction()}>Log in</button>
        </div>
      </header>
      
      <div className='mainContainer'>
        <button className='button-29' id='addBook' onClick={()=>{setPopup(true);}}>+ Add Book</button>
        <div className='bookContainer'>
            {myLibrary.map((item, index)=>(
              <div key={index} className='book'>
                <p>{item.name}</p>
                <p>{item.author}</p>
                <p>{item.pages}</p>
                <div className='buttons'>
                  <button className={item.bookRead ? 'read' : 'notRead'} id={index} onClick={(e)=>{changeReadStatus(e)}}>{item.bookRead ? 'Read' : 'Unread'}</button>
                  <button className='remove' id={index} onClick={(e)=>removeBookFromLibrary(e)}>Remove</button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Popup trigger={popup} setTrigger={setPopup} addBook={addBookToLibrary}/>
    </div>
  );
}

export default App;
