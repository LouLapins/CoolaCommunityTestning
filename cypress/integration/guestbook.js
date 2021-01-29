describe("guestbook validation", () => {
    it("short post", () => {

        cy.visit("/start");
        cy.get("li:nth-child(1)").click();

        cy.contains("Gästbok!");

        cy.get("form");
        cy.get('textarea[id="guestbookInput"]').type("he");
        cy.get("form").submit();

        cy.contains("För kort meddelande!").end();
        
    });

    it("create and remove post", () => {
        cy.visit("/guestbook");
        cy.get('textarea[id="guestbookInput"]').type("den här posten ska jag ta bort");
        cy.get("form").submit();
        cy.get("p").contains("den här posten ska jag ta bort").contains("a").click();
        cy.get("#entries").contains("den här posten ska jag ta bort").should("not.exist").end();
    })

    it("go back", () => {
        cy.visit("/guestbook");
        cy.get("a:nth-child(1)").click();
        cy.url().should("include", "start").end();
    })


})