import { useDispatch, useSelector } from "react-redux";
import task, { addTask, editTask } from "./store/task";
import Task from "./components/Task";
import Dialog from "./components/Dialog";
import { useState } from "react";


function App() {
  const tasks = useSelector( (d: any)=>d.task.tasks);
  const dispach = useDispatch();
  const [dVisivle, setDVisible]= useState<boolean>(false);
  const [mode, setMode]= useState<boolean>(false);
  const [newVal, setNewVal] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number>();
  const rTask = ()=>{
       dispach(addTask({todo: newVal, createdAt: new Date(), }))
  };
  const eTask = ()=>{
       console.log({editingIndex}, tasks)
       dispach(editTask({index: editingIndex, newTask: newVal}))
  };
  return (
      <>
         <Dialog show={dVisivle} onClose={()=>setDVisible(false)}>
            <div className="w-full h-full flex flex-col justify-evenly gap-10">
             <input 
             id='new-val-int'
             value={newVal}  onChange={e=>setNewVal(e.target.value)} className="border-2 border-blue-700"  type = 'text' placeholder="New Task Val" />
             <button
             id ='add-btn'
             onClick={()=>  { mode ?  eTask(): rTask()   ; setNewVal("");  setDVisible(false)}}
              className="w-25
               rounded-xl border-0 bg-green-400 hover:bg-green-700 pt-2 pb-2 pl-10 pr-10">Done</button>
             </div>
         </Dialog>
         <div id='icon' className="fixed w-20 h-20 top-10 left-12">
            <img src='icon.png' className="w-full h-full"/>
         </div>
         <div className="h-screen w-screen flex flex-col justify-start items-center gap-10 mt-10">
            <h1 className="text-3xl font-bold ">Todos App 2</h1>
            <div className="p-4 items-start border-2 italic h-3/4 p-1/4 w-1/2 rounded-2xl overflow-y-scroll  text-sm  lg:text-2xl gap-3 flex flex-col">
               {tasks.map(
                  (task: any, i: any)=>{
                     return <Task 
                   
                     setInpt = {(s:string)=>setNewVal(s)}
                     setDialog=  {(m: boolean)=>setDVisible(m)}
                     setMode = {(m: boolean)=>setMode(m)}
                     setEdit = {(i: number)=>setEditingIndex(i)}
                     i={task.i}   todo={task.todo} createdAt={task.createdAt} isChecked={task.isChecked} />
                  }
               )}


            </div>
         
            <button 
            onClick={()=>{setDVisible(true); setMode(false)}}
            className="fixed bottom-5 sm:right-8  md:right-20  text-2xl bg-green-400  w-16 h-20 sm:p-4 rounded-3xl hover:shadow-2xl
                              shadow-black
                              hover:bg-green-500
                           
                              
            ">
               +
            </button>
         </div>
      </>
  );
}

export default App;
