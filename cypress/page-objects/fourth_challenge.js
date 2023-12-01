/// <reference types="cypress" />

export class fourthPage {

    validateChallengeFourthHeading() {
        cy.get('section > h2')
        .should('include.text',"Challenge #4: Where's the challenge?")
    }

    removeHiddenFromClass() {
        cy.get('body > div.main > section > div > a')
        .invoke('attr', 'class', 'button-style-link');
    }

    verifyText() {
        cy.get('.button-style-link')
        .contains('I am an invisible link! Remove my "hidden" class to see me!')
    }

    visibleLink() {
       return cy.get('.button-style-link')
    }
}