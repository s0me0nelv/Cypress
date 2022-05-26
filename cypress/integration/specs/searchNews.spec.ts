beforeEach(function () {
    cy.visit(Cypress.env('baseUrl'));
    cy.login(Cypress.env('usar'), Cypress.env('pazz'));
})

describe("Navigation within main menu tests", () => {

        it('should search for specific news name and navigate to it', function () {
                cy.searchNews('Wellbeing', 'Wellbeing May');
                cy.checkArticleName('Wellbeing May');
            }
        )

        it.only('should check count of links inside dropdown ', function () {
                cy.checkToolsDropdownElementCount(14)
            }
        )
    }
);