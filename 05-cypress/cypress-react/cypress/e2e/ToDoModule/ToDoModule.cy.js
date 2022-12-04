/// <reference types="cypress" />

describe("ToDoModule tests", () => {
    beforeEach(() => {
        cy.visit("localhost:3000")
    }) 

    it("displays input and button", () => {
        cy.get("#input-todomodule").should("be.visible")
        cy.get("#input-button").should("be.visible")
    })

    it("button is disabled when input is empty", () =>{
        cy.get("#input-todomodule").should("be.empty")
        cy.get("#input-button").should("be.disabled")
    })

    it("button is enabled when input is has text", () =>{
        cy.get("#input-todomodule").type("Coś")
        cy.get("#input-button").should("be.enabled")
    })

    it("clicking button adds input value as a task", () =>{
        cy.get("#input-todomodule").type("Coś")
        cy.get("#input-button").click()
        cy.get("#todo-description").first().should("have.text", "Coś")
    })

    it("", () => {
        cy.get("#input-todomodule").type("Coś")
        cy.get("#input-button").click()
        cy.get("#deleteButton").should("be.visible")
        cy.get("#editButton").should("be.visible")
    })

    it("", () => {
        cy.get("#input-todomodule").type("Coś")
        cy.get("#input-button").click()
        cy.get("#todo-description").click().should("have.css", "text-decoration", "line-through solid rgb(0, 0, 0)")
    });
})

