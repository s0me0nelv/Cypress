it('Test multiple elements', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.login(Cypress.env('usar'), Cypress.env('pazz'));

    cy.get('#menu-main-menu').find('li').filter('.menu-item-object-page').should('have.length', 7);
    cy.get('#menu-main-menu').find('li').first().should('have.text', 'Home');
    cy.get('#menu-main-menu').find('li').first().contains('Home');
    cy.get('#menu-main-menu').find('li').first().invoke('text').should('be.equal', 'Home');
    cy.get('#menu-main-menu').find('li').first().then((elem) => {
        const text = elem.text();

        expect(text).to.match(/Home/);
        expect(text).to.include('Home');
        cy.wrap(text).should('be.equal', 'Home');
    });

})