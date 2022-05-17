// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
declare namespace Cypress {
    interface Chainable {
        /**
         * Wraps iframe by cypress command
         */
        getIframeBody(): Chainable<any>;
        checkBillboardElementCount(categoryName: string): Chainable<any>;
        clickMainSection(sectionName: string): Chainable<any>;
    }
}


Cypress.Commands.add('getIframeBody', () => {
    return cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap);
});

Cypress.Commands.add('clickMainSection', (sectionName: string) => {
    cy.contains(sectionName).click()
}
);

Cypress.Commands.add('checkBillboardElementCount', (categoryName: string) => {
        cy.get('.products li').find('h2').contains(categoryName).find('mark').then((elem)=>{
        const numberOfProducts = parseInt(elem.text().split(" ")[0]);
        cy.wrap(elem).click();
        cy.get('.products li').should('have.length', numberOfProducts);
    })
});

