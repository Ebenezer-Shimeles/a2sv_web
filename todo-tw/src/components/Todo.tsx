import { useState } from "react";

export type TodoProps = {
   isChecked: boolean;
   clearDialog: ()=>void;
   setOnDialogDone: (  func: (newVal: string) => void  )=>void;
   setDialogVisible: (b: boolean)=>void;
   todo: string;
   dateCreated: Date;
   index: number;
   setDialogValue: (newVal: string)=>void;
   setOnEdit: (newVal: boolean)=>void;
};

const Todo = (props: TodoProps)=>{
   const [isChecked, setIsChecked] = useState<boolean>(props.isChecked);
   const [isDeleted, setIsDeleted] = useState<boolean>(false)
   { /*  const texStyle = {fontSize: '1.2rem', textDecoration: isChecked? 'line-through': 'none'}; */}
   const textClass = (isChecked ? 'line-through' : '' ) + ' text-l';
//    const flatButtonStyle = {
//       border: '0px',
//       background: 'inherit'
      
//    };
   const flabButtonClass = 'border';

   
   const [todo, setTodo] = useState<string>(props.todo);
   const onChanged = ()=>{
       setIsChecked(!isChecked);
   }
   const editMode = ()=>
   {
      console.log('Going to edit mode')
      props.setOnEdit(true);
      props.setDialogValue(todo)
      props.setDialogVisible(true);
      props.setOnDialogDone(
        (newValue)=> {
            console.log('setting todo to ', newValue)
            setTodo(newValue);
            props.setOnEdit(false);
            props.setDialogVisible(false);
        }

     )

   }
   return ( <>
            {
                !isDeleted &&
                /**  style={{display: 'flex', justifyContent: 'space-evenly', width: '90%', background: 'white', padding:'5px',
                            margin: '5px'
            
                }
                
                } */
                <div className="flex justify-evenly w-10/12 bg-white p-1 m-1 sm:text-xs md:text-sm text-md">
                    <input size={50} type="checkbox" onChange={onChanged} checked={isChecked}/>
                
                    <span  className={textClass}>{todo}</span>
                    <span  className={textClass + ' sm:hidden md:block'  }>{props.dateCreated.toString()}</span>
                    <div className="flex gap-4 justify-between">
                        <button  className="border-0 " onClick={editMode}>Edit</button>
                        <button  className="text-red-600 border-0" onClick={_=>setIsDeleted(true)}>Delete</button>
                    </div>
                </div>
            }
            </>
   )
}
export {Todo}