describe("Todo Module tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("Adding todo tests", () => {
    it("should assert if add button is disabled by default", () => {
      const addTodoButton = cy.get("#add-todo-button");
      addTodoButton.should("css");

      cy.get("#todo-input").type("costam");

      addTodoButton.click();
    });
  });
});
