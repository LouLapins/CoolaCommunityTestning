describe("Signup form", () => {

    it("User name validation", () => {

        cy.visit("/register");

        cy.get("form");
        // Typing nothing
        cy.get("form").submit();

        cy.contains("För kort eller för långt användarnamn!");

        cy.get("form");
        cy.get('input[name="username"]').type("Lo").should("have.value", "Lo");
        cy.get("form").submit();

        cy.contains("För kort eller för långt användarnamn!");

        cy.get("form");
        cy.get('input[name="username"]').type("Hejjagheterloulapins");
        cy.get("form").submit();

        cy.contains("För kort eller för långt användarnamn!").end();


    });

    it("Email validation", () => {

        cy.visit("/register");

        cy.get("form");
        cy.get('input[name="username"]').type("LouLapins");
        cy.get('input[name="email"]').type("email@").should("have.value", "email@");
        cy.get("form").submit();

        cy.contains("Felformatterad e-postadress!");


        cy.get("form");
        cy.get('input[name="username"]').type("LouLapins");
        cy.get('input[name="email"]').type("email@domain.");
        cy.get("form").submit();

        cy.contains("Felformatterad e-postadress!").end();

    });

    it("Password validation", () => {

        cy.visit("/register");

        cy.get("form");
        cy.get('input[name="username"]').type("LouLapins");
        cy.get('input[name="email"]').type("email@domain.com");
        cy.get('input[name="password"]').type("12").should("have.value", "12");
        cy.get('input[name="passwordConfirm"]').type("12").should("have.value", "12");
        cy.get("form").submit();

        cy.contains("Du har valt för kort lösenord");

        cy.get("form");
        cy.get('input[name="username"]').type("LouLapins");
        cy.get('input[name="email"]').type("email@domain.com");
        cy.get('input[name="password"]').type("123123");
        cy.get('input[name="passwordConfirm"]').type("hejhej");
        cy.get("form").submit();

        cy.contains("Lösenorden överensstämmer inte!").end();

    });

    it("Can register", () => {

        cy.visit("/register");

        cy.get("form");
        cy.get('input[name="username"]').type("LouLapins");
        cy.get('input[name="email"]').type("email@domain.com");
        cy.get('input[name="password"]').type("123123");
        cy.get('input[name="passwordConfirm"]').type("123123");
        cy.get("form").submit();

        cy.contains("Anvädaren registrerad!").end();

    });

    it("Login link works", () => {

        cy.visit("/register");

        cy.get("form");
        cy.get('input[name="username"]').type("LouLapins");
        cy.get('input[name="email"]').type("email@domain.com");
        cy.get('input[name="password"]').type("123123");
        cy.get('input[name="passwordConfirm"]').type("123123");
        cy.get("form").submit();
        cy.get("a").click();

        cy.contains("Coola communityt!").end();

    });

});