import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./store/task";


function App() {
  const tasks = useSelector( (d: any)=>d.task.tasks);
  const dispach = useDispatch();

  return (
      <div className="h-screen w-screen">
         

         <button className="fixed bottom-5 right-8  md:right-20  text-2xl bg-green-400 p-4 rounded-full hover:shadow-lg
                            shadow-black
                         
                            
         ">
            +
         </button>
      </div>
  );
}

export default App;
