describe("Startsida", () => {
    it("Link validation", () => {
        cy.visit("/start.html");
        cy.get('a[href="guestbook.html"]').click();
        cy.url().should("include", "guestbook").end();

        cy.visit("/start.html");
        cy.get('a[href="presentation.html"]').click();
        cy.url().should("include", "presentation").end();

        cy.visit("/start.html");
        cy.get('a[href="/"]').click();
        cy.url().should("eq", "http://localhost:5500/").end();
    })
})