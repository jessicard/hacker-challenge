/// <reference types="cypress" />

export class ninthPage {

    validateChallengeFifthHeading() {
        cy.get('section > h2')
        .should('include.text','Challenge #9: The styles are hiding our password!')
    }

    enterPasswordAndClick() {
        //due to image can't take out the password as it needs OCR proccessing
        cy.get('.styles-password').type('hocus pocus')
        cy.get('.styles-btn').click()
    }
}