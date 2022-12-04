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
    it.skip("should change style on click task", () => {
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
    it.skip("should delete task on click button x", () => {
      cy.get("#addNewToDo").should("be.visible");
      cy.get("#input").should("be.visible");
      cy.get("#addNewToDo").should("be.disabled");
      cy.get("#input").type("zadanie1");
      cy.get("#addNewToDo").click();
      cy.contains("zadanie1").should("be.visible");
      cy.get("#xButton").should("be.visible");
      cy.get("#editButton").should("be.visible");
      //checking X button
      cy.get("#editDescription").should("be.visible");
      cy.get("#xButton").first().click();
      cy.get("#editDescription").should("not.exist");
    });
    it.only("should edit task on click button edit", () => {
      cy.get("#addNewToDo").should("be.visible");
      cy.get("#input").should("be.visible");
      cy.get("#addNewToDo").should("be.disabled");
      cy.get("#input").type("zadanie1");
      cy.get("#addNewToDo").click();
      cy.contains("zadanie1").should("be.visible");
      cy.get("#xButton").should("be.visible");
      cy.get("#editButton").should("be.visible");
      // edit
      cy.get("#editButton").first().click();
      cy.get("#editInput")
        .should("be.visible")
        .should("have.value", "zadanie1");
      cy.get("#editButton").should("not.exist");
      cy.get("#xButton").should("not.exist");
      cy.get("#xButton").should("not.exist");
      cy.get("#saveButton").should("exist");
      cy.get("#editInput").clear();
      cy.get("#saveButton").should("be.disabled");
      cy.get("#editInput").type("zadanie2");
      cy.get("#saveButton").should("exist");
      cy.get("#saveButton").click();
      cy.contains("zadanie2").should("be.visible");
      cy.get("#editButton").should("be.visible");
      cy.get("#xButton").should("be.visible");
    });
  });
});
