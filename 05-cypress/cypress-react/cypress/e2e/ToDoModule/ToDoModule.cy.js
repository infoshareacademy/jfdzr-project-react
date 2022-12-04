describe("Todo Module Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  describe("Adding todo tests", () => {
    it("should assert if add button id disabled by default", () => {
      cy.get("#addNewToDo").should("be.visible");
      cy.get("#input").should("be.visible");
      cy.get("#addNewToDo").should("be.disabled");
      cy.get("#input").type("zadanie1");
      cy.get("#addNewToDo").click();
      cy.contains("zadanie1").should("be.visible");
      cy.get("#xButton").should("be.visible");
      cy.get("#editButton").should("be.visible");
    });
  });
});
