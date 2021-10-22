/// <reference types="cypress" />

describe('visual conduit', () => {
   it('home', () => {
    cy.visit('/')
    cy.contains('conduit')
    cy.matchImageSnapshot();
    })
})