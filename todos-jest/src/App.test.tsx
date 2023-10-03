import { act, render } from "@testing-library/react"
import App from "./App"
import React  from "react"
import "@testing-library/jest-dom";
import {screen} from '@testing-library/react'
import { Provider } from "react-redux";
import store from "./store/store";
describe('Test the app\'s ui funtionality', ()=>{

    beforeAll(()=>{
        render(
            <React.StrictMode>
                <Provider store={store}>
                   <App />
                </Provider>
               
            </React.StrictMode>
        )
    })

    it('should test on adding a task', ()=>{
        act(()=>{
            const addBtn = screen.getByTestId('add-btn')
            expect(addBtn).not.toBe(null); //button is got
            addBtn.click();  //open the dialog
         
            const input = screen.getByTestId('new-val');
            expect(input).not.toBe(null); 
            (input as unknown as {value: string}).value   = 'A new Task'
        
            const cBtn = screen.getByTestId('m-btn')
            expect(cBtn).not.toBe(null); //button is got
            cBtn.click();


            expect(screen.findAllByText('A new Task')).not.toEqual(null)
        });


    });
            


})