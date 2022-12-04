describe("Todo Module Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  describe("Adding todo tests", () => {
    it.skip("should assert if add button id disabled by default", () => {
      cy.get("#addNewToDo").should("be.visible");
      cy.get("#input").should("be.visible");
      cy.get("#addNewToDo").should("be.disabled");
      cy.get("#input").type("zadanie1");
      cy.get("#addNewToDo").click();
      cy.contains("zadanie1").should("be.visible");
      cy.get("#xButton").should("be.visible");
      cy.get("#editButton").should("be.visible");
    });
    it.only("should change style on click task", () => {
      cy.get("#addNewToDo").should("be.visible");
      cy.get("#input").should("be.visible");
      cy.get("#addNewToDo").should("be.disabled");
      cy.get("#input").type("zadanie1");
      cy.get("#addNewToDo").click();
      cy.contains("zadanie1").should("be.visible");
      cy.get("#xButton").should("be.visible");
      cy.get("#editButton").should("be.visible");
      // break
      cy.get("#editDescription").should(
        "have.css",
        "text-decoration",
        "rgb(0, 0, 0)"
      );
      cy.get("#editDescription").first().click();
      cy.get("#editDescription").should(
        "have.css",
        "text-decoration",
        "line-through rgb(0, 0, 0)"
      );
    });
  });
});
