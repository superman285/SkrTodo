// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
    it('Visits the app root url', () => {
        cy.visit('/')
        cy.contains('h1', 'SkrTodos')
    })
    it('Visits the url with /all', () => {
        cy.visit('/all')
        cy.contains('h1', 'SkrTodos')
    })
    it('Visits the url /active', () => {
        cy.visit('/active')
        cy.contains('我是NO.1')
    })
    it('Visits the url /completed', () => {
        cy.visit('/completed')
        cy.contains('千年老二')
    })
    it('test todo count start', () => {
        cy.get('.todo-count').contains(3);
    })
    it('test new todo', () => {
        cy.get('.new-todo').type('test to new a ToDo!').type('{enter}');
        cy.get('.todo-list').contains('test to new a ToDo!');
    })
    it('test todo count end', () => {
        cy.get('.todo-count').contains(4);
    })
    it('test active route', () => {
        cy.get('.filters li:nth-child(2)').click();
        cy.get('.todo-count').contains(3);
    })
    it('test completed route', () => {
        cy.get('.filters li:nth-child(3)').click();
        cy.get('.todo-count').contains(1);
    })
    it('test completed route', () => {
        cy.get('.filters li:nth-child(3)').click();
        cy.get('.todo-count').contains(1);
    })
    it('test clear completed', () => {
        cy.get('.filters li:nth-child(1)').click();
        cy.get('.clear-completed').click();
        cy.get('.todo-count').contains(3);
    })


})
