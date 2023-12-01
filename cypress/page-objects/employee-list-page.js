/// <reference types="cypress" />

export class EmployeeListPage {

    navigate() {
        cy.visit('/Employee');   
    }

    searchEmployee(employeeName) {
        const searchNameField = cy.get('input[name="searchTerm"]');
        searchNameField.type(employeeName + '{enter}');
    }

    deleteEmployee() {
        cy.get('a:contains("Delete")').click();
        cy.get('input[value="Delete"]').click();
    }

    verifyEmployeeDeleted(name) {
        cy.get('table').find('tr').last().should('not.contain', name);
    }

}