beforeEach(function(){
    cy.visit(Cypress.env('baseUrl'));
    cy.login(Cypress.env('usar'), Cypress.env('pazz'));
})

describe("Billboard elements count and visibility check", () => {

        it('should get provided category element count in tooltip and compare with inside elements count', function()  {
                cy.clickMainSection('Billboard').get('.products').should('be.visible');
                cy.checkBillboardElementCount('Food')
        });

    }
);