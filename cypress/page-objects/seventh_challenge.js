/// <reference types="cypress" />

export class seventhPage {

    validateChallengeFifthHeading() {
        cy.get('section > h2')
        .should('include.text','Challenge #7: The console contains the answer')
    }

    enterPasswordFromConsole() {
        Cypress.on('window:before:load', (win) => {
            cy.spy(win.console, 'log').as('consoleLog')
        })
        cy.get('input.console').type('pr3st0')
    }

    clickThreeTimes() {
        cy.get('button.console').dblclick()
        cy.get('button.console').click()
    }
}