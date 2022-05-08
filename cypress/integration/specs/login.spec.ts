describe("Login verify test", () => {

        it('Login happy path', function () {
            cy.visit(Cypress.env('baseUrl'));
            cy.login(Cypress.env('usar'), Cypress.env('pazz'));
            cy.get('[alt=\'Profile picture of Eugene Buyanov\']').should('be.visible');
            cy.get('.logout-button').click();
            cy.get('div#logout h2').should('have.text', 'Logout successful');
        });

        it('Login failed', function () {
            cy.visit(Cypress.env('baseUrl'));
            cy.login(Cypress.env('usar'), Cypress.env('wrongPazz'));
            cy.get('div#msg.errors').should('have.text', 'Invalid credentials.')
        });
    }
);