/// <reference types="cypress" />

export class thirdPage {

    validateChallengeThirdHeading() {
        cy.get('section > h2')
        .should('include.text','Challenge #3: Find the answer in the code')
    }

    challengeText() {
        cy.get('div.challenge p')
        .contains('Read the JavaScript to figure out how to solve me.')
    }

    doubleClick() {
        cy.get('h2').dblclick()
    }
}