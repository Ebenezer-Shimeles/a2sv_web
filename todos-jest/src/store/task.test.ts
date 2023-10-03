import reducer, { unCheckTask } from './task';
import { Store, configureStore } from '@reduxjs/toolkit';
import {addTask, removeTask, editTask, checkTask} from './task'

describe('This tests the whole app functionality', ()=>{
   let store: Store;
    beforeAll(()=>{ 
      store = configureStore({
        reducer:{
            task: reducer
        }
      })

   }) //setting up a store here
   it('should test that adding a task works', ()=>{
      expect( (store.getState().task.tasks.length)  ).toBe(0);
      store.dispatch(addTask(addTask({todo: "A new Task", createdAt: "19/20" })));
      expect( (store.getState().task.tasks.length)  ).toBe(1);
      expect( (store.getState().task.tasks[0]).payload.todo  ).toBe("A new Task");
   });
   it('should test that editing a task works', ()=>{
    expect( (store.getState().task.tasks.length)  ).toBe(1);
    store.dispatch(          editTask({index: 0, newTask: "Another Task"})     );
    console.log(store.getState().task.tasks)
    expect( (store.getState().task.tasks.length)  ).toBe(1);
    expect( (store.getState().task.tasks[0]).todo  ).toBe("Another Task");
    });
    it('should test that finishing a task works', ()=>{
        expect( (store.getState().task.tasks.length)  ).toBe(1);
        store.dispatch(          checkTask(0)   );
        expect( (store.getState().task.tasks[0].isChecked)  ).toBe(true);
       
    });
    it('should test that unchecking a task works', ()=>{
        expect( (store.getState().task.tasks.length)  ).toBe(1);
        store.dispatch(          unCheckTask(0)   );
        expect( (store.getState().task.tasks[0].isChecked)  ).toBe(false);
       
    });
    it('should test that deleting a task works', ()=>{
        expect( (store.getState().task.tasks.length)  ).toBe(1);
        store.dispatch(          removeTask(0)   );
        expect( (store.getState().task.tasks.length)  ).toBe(0);
       
    });
})

export {}