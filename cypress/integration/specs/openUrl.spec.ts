describe("Open google page test", () => {

        it('should open google URL for Pipeline homework', function () {
            cy.visit('https://www.google.lv/');
            cy.contains('Ich stimme zu').click();
        });
    }
);