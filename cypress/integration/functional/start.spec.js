/// <reference types="cypress" />

describe('start page', () => {
    it('displays conduit title', () => {
    cy.visit('/')
    cy.contains('conduit')
  })
})