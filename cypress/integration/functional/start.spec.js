/// <reference types="cypress" />

describe('start page', () => {
    it('displays conduit title', () => {
    cy.visit('http://localhost:4200/')
    cy.contains('conduit')
  })
})