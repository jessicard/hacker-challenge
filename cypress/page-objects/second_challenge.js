/// <reference types="cypress" />

export class secondPage {

    validateChallengeSecondHeading() {
        cy.get('section > h2')
        .should('include.text','Challenge #2: Click the button')
    }

    removeAttributeAndClick() {
        cy.get('body > div.main > section > div > button')
        .should('have.attr', 'disabled')
        cy
         .get('body > div.main > section > div > button')
         .invoke('removeAttr', 'disabled')
         .get('button')
         .click()
    }
}