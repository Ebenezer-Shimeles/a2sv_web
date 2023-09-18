import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dialog from './components/Dialog';
import { Todo } from './components/Todo';

function App() {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const todos = [
     {
      isChecked: false,
     
      todo: 'Nothing',
      dateCreated: new Date(),
     },
     {
      isChecked: false,
     
      todo: 'Nothing',
      dateCreated: new Date(),
     }


  ];
  const addTodo = ()=>{

  };

  
  return (
    <div style={{width: '100vw', height: '100vh'}}>
       <Dialog show={showDialog} onClose={()=>setShowDialog(false)}>
          <input type='text' placeholder='Todo info' />
          <button>Add</button>
       </Dialog>
       <img style = {{position: 'fixed', left: '0', top: '0'}} width={'5%'}  height={'10%'} src='logo' />
       <center>
          <div id='main-container' style={{width: '50%', background: 'silver', height: '96vh', borderRadius: '20px'}}>
               <h1>Todo Lists</h1>
               {todos.map((todo, index) =>{
                  return <Todo  index={index} isChecked={todo.isChecked} todo={todo.todo} dateCreated={todo.dateCreated}/>
               })}
          </div>
       </center>
       <button style={{borderRadius: '100%', position: 'fixed', fontSize:'2rem',color: 'white', right: '10px', bottom: '10px', width: '70px', height: '70px', background: 'green'}}>+</button>
    </div>
  );
}

export default App;
