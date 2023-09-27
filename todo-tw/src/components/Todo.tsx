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
   const texStyle = {fontSize: '1.2rem', textDecoration: isChecked? 'line-through': 'none'};
   const flatButtonStyle = {
      border: '0px',
      background: 'inherit'
      
   };

   
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
        
                <div style={{display: 'flex', justifyContent: 'space-evenly', width: '90%', background: 'white', padding:'5px',
                            margin: '5px'
            
                }
                
                }>
                    <input size={50} type="checkbox" onChange={onChanged} checked={isChecked}/>
                    <span   style={texStyle}>{todo}</span>
                    <span   style={texStyle}>{props.dateCreated.toString()}</span>
                    <div>
                        <button   style={{...flatButtonStyle, color: 'blue'}} onClick={editMode}>Edit</button>
                        <button   style={{...flatButtonStyle, color: 'red'}} onClick={_=>setIsDeleted(true)}>Delete</button>
                    </div>
                </div>
            }
            </>
   )
}
export {Todo}