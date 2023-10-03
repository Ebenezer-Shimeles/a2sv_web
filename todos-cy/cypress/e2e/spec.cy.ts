

describe('Tests the ui of the app', () => {
  beforeEach(()=>{
    cy.visit('localhost:3000'); //we must make sure that the react app is up and running for this to work
})
const addTask = (t: string)=>{ 
  //clicks on the plus key and types  the given string
  cy.contains('+').click()
  cy.get('input').type(t)
  cy.get('#add-btn').click();
}
 
   it('test whether adding a task works correctly', ()=>{
      addTask('new task')
      cy.contains('new task')
   })
   it('tests for deleting tasks', ()=>{
    // cy.visit('localhost:3000');
    addTask('new task')
    
    cy.get('.del-btn').click()
    cy.contains('new task').should('not.exist')
   });
   it('should test got editing a task', ()=>{
      
      addTask('new task')
     
      cy.contains('Edit').click();
      const inpt = cy.get('#new-val-int');
      inpt.clear()
      inpt.type('Another Task')
      cy.get('#add-btn').click();

      cy.contains('new task').should('not.exist')
      cy.contains('Another Task').should('exist')
   });
   it('should check for checking and unchecking a task', ()=>{
    addTask('new task')
     cy.get('input[type=checkbox]').check();
     cy.get('input[type=checkbox]').should('be.checked')
     cy.get('input[type=checkbox]').uncheck();
     cy.get('input[type=checkbox]').should('not.be.checked')

   })
})