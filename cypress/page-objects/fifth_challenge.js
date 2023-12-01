/// <reference types="cypress" />

export class fifthPage {

    validateChallengeFifthHeading() {
        cy.get('section > h2')
        .should('include.text','Challenge #5: Challenge++')
    }

    verifyChallengeText() {
        cy.get('.button-style-link')
        .contains('This button should link to the next challenge')
    }

    updateURL() {
        cy.get('@animalname').then((value) => {
            cy.log('Extracted Animal Name:', value);
            const correctUrl = "/challenges/normal/" + value + ".html";
    
            cy.visit('/'+ correctUrl)    
            //cy.get('input.hidden-password').type(value);
        });
    }
}