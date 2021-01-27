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


})