import { useDispatch } from "react-redux";
import { checkTask, removeTask, unCheckTask } from "../store/task";
import { useState } from "react";



export type TaskProps = {
    i: number;
    isChecked: boolean;
    todo: string;
    createdAt: Date;
    setEdit: (i: number)=>void;
    setMode: (m: boolean)=>void
    setDialog: (m: boolean)=>void
    setInpt:(s: string)=>void
};

export default (props: TaskProps)=>{
    const dispatch = useDispatch();
    const [index, _] = useState(props.i)
    const action = ()=>{
        if(props.isChecked){
            dispatch(unCheckTask(index))
        }
        else{
            dispatch(checkTask(index))
        }
    }
    const lineStyle = props.isChecked ? 'line-through' : '';
    return (
        <div className="flex justify-center gap-7 w-full">
            <span><input type='checkbox' checked={props.isChecked} onChange={action}/></span>
            <span className={lineStyle}>{props.todo }</span>
            <span className={lineStyle}>{props.createdAt.toDateString()}</span>

            <span 
             onClick={()=>{
                props.setInpt(props.todo)
                props.setEdit(props.i)
                props.setMode(true);
                props.setDialog(true);
             }}
             className="text-sm text-green-800 hover:text-green-950 hover:underline"><button>Edit</button></span>
            <span  onClick={()=>dispatch(removeTask(index))}  className="text-sm text-red-800  hover:text-red-950 hover:underline"><button>Delete</button></span>
        </div>
    )
}