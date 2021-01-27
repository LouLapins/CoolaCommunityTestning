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

    // Lite osäker om både create post & remove post behövs
    it("create post", () => {
        cy.visit("/guestbook");
        cy.get("form");
        cy.get('textarea[id="guestbookInput"]').type("här är min första post");
        cy.get("form").submit().end();
    })

    it("remove post", () => {
        cy.visit("/guestbook");
        cy.get("form");
        cy.get('textarea[id="guestbookInput"]').type("den här posten ska jag ta bort");
        cy.get("form").submit();
        cy.get("a:nth-child(2)").click().end();
    })

    it("go back", () => {
        cy.visit("/guestbook");
        cy.get("a:nth-child(1)").click();
        cy.url().should("include", "start").end();
    })


})