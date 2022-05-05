describe("Login verify test", () => {

        it('Login happy path', function () {
            cy.visit(Cypress.env('baseUrl'));
            cy.get('#username').type(Cypress.env('usar'));
            cy.get('#password').type(Cypress.env('pazz'), {log: false});
            cy.contains('Login').click();
            cy.get('[alt=\'Profile picture of Eugene Buyanov\']').should('be.visible');
            cy.get('.logout-button').click();
            cy.get('div#logout h2').should('have.text', 'Logout successful');
        });

        it('Login failed', function () {
            cy.visit(Cypress.env('baseUrl'));
            cy.get('#username').type(Cypress.env('usar'));
            cy.get('#password').type(Cypress.env('wrongPazz'), {log: false});
            cy.contains('Login').click();
            cy.get('div#msg.errors').should('have.text', 'Invalid credentials.')
        });
    }
);