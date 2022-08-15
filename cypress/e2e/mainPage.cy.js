/// <reference types="cypress" />

beforeEach(() => {
	cy.resetDatabase();
    cy.seedDatabase();
});

describe("main page suit test", () => {
    it("test for create a new client", () => {

        const URL_FRONT = "http://localhost:3000";
        const URL_SERVER = "http://localhost:5000";

        const login = {
            cpf: "000.000.000-00",
            password: "password",
        }

        const client = {
            name: "Cliente1",
            updatename: "Novo Cliente 1",
            date: "01/01/2023",
            payment: "Mensal",
            service: "Pilates"
        }

        cy.visit(`${URL_FRONT}/`);
        cy.get("#login").type(login.cpf);
        cy.get("#password").type(login.password);
        // cy.intercept("POST", `${URL_SERVER}/signin`).as("signin");
            cy.get("button").click();
        // cy.wait("@signin");

        cy.url().should("equal", `${URL_FRONT}/main`);
        cy.wait(1000);
        cy.get("#creation").click();
        cy.url().should("equal", `${URL_FRONT}/insert`);

        cy.get("#name").type(client.name,{force: true});
        cy.get("#startdate").type(client.date,{force: true});
        cy.contains(client.payment).click({force: true});
        cy.contains(client.service).click({force: true});
        cy.contains("Cadastrar").click();
        cy.contains(client.name).should("be.visible");
        cy.contains(client.payment).should("be.visible");
        cy.contains(client.service).should("be.visible");

        // cy.contains("U").click();
        // cy.url().should("equal", `${URL_FRONT}/update/1`);
        // cy.get("#name").type(client.updatename);
        // cy.contains("Anual").click();
        // cy.intercept("PUT", `${URL_SERVER}/clients/1`).as("updateClient");
        //     cy.contains("Atualizar").click();
        // cy.wait("@updateClient");
        // cy.contains(client.updatename).should("be.visible");

        // cy.intercept("DELETE", `${URL_SERVER}/clients/1`).as("deleteClient");
        //     cy.contains("X").click();
        // cy.wait("@deleteClient");
    })
})