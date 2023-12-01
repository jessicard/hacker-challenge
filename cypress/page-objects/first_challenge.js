/// <reference types="cypress" />

export class firstPage {

    validateChallengeOneHeading() {
        cy.get('section > h2')
        .should('include.text','Challenge #1: Find the password hidden in the HTML')
    }

    enterPassword() {
        cy.get('input.hidden-password').invoke('attr', 'data-password').as('password')
        cy.get('@password').then((value) => {
        cy.log('Extracted Value:', value);
        cy.get('input.hidden-password').type(value);
    });
    }

    submit() {
        cy.get('button.hidden-password').click()
    }
}