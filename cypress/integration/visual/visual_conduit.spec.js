/// <reference types="cypress" />

describe('visual conduit', () => {
   it('home', () => {
    cy.visit('http://localhost:4200/')
    cy.contains('conduit')
    cy.matchImageSnapshot();
    })
})