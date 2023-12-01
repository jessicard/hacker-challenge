/// <reference types="cypress" />

export class eighthPage {

    validateChallengeFifthHeading() {
        cy.get('section > h2')
        .should('include.text','Challenge #8: Move the blocker')
    }

    removeBlocker() {
        cy.get('.blocker').invoke('remove');
    }

    nextChallengeLink() {
        cy.get('.button-style-link')
        .contains('Go to the next challenge')
    }
}