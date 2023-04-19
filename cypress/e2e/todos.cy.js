describe('Pruebas de pagina Todo', () => {

    beforeEach(() => {
      cy.visit('http://todomvc-app-for-testing.surge.sh/')
      
    })
    
    it ('el programa puede añadir una tarea', () => {
        cy.get('.new-todo').type('comprar el pan{enter}')
        cy.get('.toggle').click()
        

  }) 
  it ('Marcar tarea como completada:', () => {
    cy.get('.new-todo').type('comprar el pan{enter}')
    cy.get('.toggle').click()
    cy.get('.selected')


})

it ('Filtrar tareas:', () => {
  cy.get('.new-todo').type('comprar el pan{enter}')
  cy.get('.new-todo').type('agua{enter}')
  cy.get('.new-todo').type('leche{enter}')
 

  
  
}) 
}) 
