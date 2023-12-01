/// <reference types="cypress" />

export class tenthPage {

    validateChallengeFifthHeading() {
        cy.get('section > h2')
        .should('include.text','Challenge #10: Fetch the password from the "Network" tab')
    }

    getPasswordFromNetworkRequest() {
        cy.request('https://hacker-challenge.netlify.app//challenges/normal/jellyfish-password.json').then(
            (response) => {
              // response.body is automatically serialized into JSON
              expect(response.status).to.eq(200) // true
              expect(response.body).property('password')
              const respBody = response.body.password;
              cy.get('.network-password').type(respBody)
            }
          )
          cy.get('.network-btn').click()
    }
}