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
 // style={{width: '100vw', height: '100vh'}}
  return (
   <>
          <Dialog show={showDialog} onClose={()=>setShowDialog(false)}>
            {/*style={{width: '100%', height: '20%', display:'flex', flexDirection:'column', alignItems: 'center', gap: '40px'}} */}
            <div  className='w-full h-1/5 flex flex-col items-center gap-10'>
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
      <div className='bg-white w-screen h-screen flex justify-center' >
  
         {/*   style = {{position: 'fixed', left: '0', top: '0'}} width={'5%'}  height={'10%'}*/ }
         <img className='fixed left-0 top-0 w-1/12 h-1/12' src='logo' />
         {/* style={{width: '50%', background: 'silver', height: '96vh', borderRadius: '20px'}} */}
   
            <div id='main-container' className='w-1/2 rounded-xl bg-slate-300 text-center flex flex-col justify-start align-center'>
                  <h1 className='text-2xl mb-4'>Todo Lists</h1>
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

         <button 
         onClick={addTodo}
         style={{borderRadius: '100%', position: 'fixed', fontSize:'2rem',color: 'white', right: '10px', bottom: '10px', width: '70px', height: '70px', background: 'green'}}>+</button>
      </div>
    </>
  );
}

export default App;
