import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dialog from './components/Dialog';
import { Todo } from './components/Todo';




interface Todo     {
   isChecked: boolean,
   todo: string,
   dateCreated:  Date,
  }

function App() {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [dialogValue, setDialogValue] = useState<string>("");
  const onDialogDone=  useRef<( (newVal: string) => void ) | null>(null);
  const isEdit = useRef<boolean>(false);
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodo = ()=>{
      isEdit.current = false;
      setDialogValue("");
      setShowDialog(true);

  };
  const regTodo = ()=>{
      setTodos([...todos, {dateCreated: new Date(), todo: dialogValue, isChecked: false}]);
      setShowDialog(false);
      onDialogDone.current = null;
  }

  return (
    <div style={{width: '100vw', height: '100vh'}}>
       <Dialog show={showDialog} onClose={()=>setShowDialog(false)}>
          <div style={{width: '100%', height: '20%', display:'flex', flexDirection:'column', alignItems: 'center', gap: '40px'}}>
              <input onChange={e=>setDialogValue(e.target.value)}  value={dialogValue} className ='in' type='text' placeholder='Todo info' />
              <button style={{flex: '0', 'border': '0px', background: 'green', borderRadius:'5px',  
                  paddingTop: '14px',
                  paddingBottom: '14px',
              paddingRight: '80px', paddingLeft: '80px'}}
                 onClick={
                   ()=>{
                     console.log('going this way', isEdit.current, onDialogDone);
                     if(isEdit.current && onDialogDone.current){
                     
                           onDialogDone.current(dialogValue);
                          
                     }
                     else{
                           regTodo()
                     }
                     setDialogValue("");
                     setShowDialog(false);
                   }
                 }
              >Done</button>

          </div>
         
       </Dialog>
       <img style = {{position: 'fixed', left: '0', top: '0'}} width={'5%'}  height={'10%'} src='logo' />
       <center>
          <div id='main-container' style={{width: '50%', background: 'silver', height: '96vh', borderRadius: '20px'}}>
               <h1>Todo Lists</h1>
               {todos.map((todo, index) =>{
                  return <Todo  
                  setDialogValue={val=>setDialogValue(val)}
                  setDialogVisible={(newValue)=>setShowDialog(newValue)}
                    index={index} isChecked={todo.isChecked} todo={todo.todo} dateCreated={todo.dateCreated}
                                 setOnDialogDone={(f)=> { onDialogDone.current = f ; console.log('setting on dialog done =', onDialogDone.current);}} clearDialog={()=>setDialogValue("")}
                                 setOnEdit={(newVal) => isEdit.current = newVal}
                  />
               })}
          </div>
       </center>
       <button 
       onClick={addTodo}
       style={{borderRadius: '100%', position: 'fixed', fontSize:'2rem',color: 'white', right: '10px', bottom: '10px', width: '70px', height: '70px', background: 'green'}}>+</button>
    </div>
  );
}

export default App;
