describe('Presentation page', () => {
    it('Can go back', () => {
        cy.visit("/presentation");
        cy.get("a").click();
        cy.url().should("include", "start").end();

    })
})