/// <reference types="cypress" />

export class startPage {

    navigate() {
        cy.visit('/');   
    }

    normalChallenge() {
      return  cy.get('.button-style-link')
        .contains('Start normal challenge mode');
    }

    hardChallenge() {
      return  cy.get('.button-style-link')
        .contains('Start hard challenge mode');
    }

    validateHeading() {
      return  cy.get('h1 > a')
        .should('include.text','Hacker Challenge')
    }

}