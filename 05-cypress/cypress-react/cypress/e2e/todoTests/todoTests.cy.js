describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  xit("should visible input and button", () => {
    const addButton = cy.get("#add-button-id");
    const inputForAdd = cy.get("#input-for-add-button");

    addButton.should("be.visible");
    inputForAdd.should("be.visible");
    inputForAdd.should("have.value", "");
    cy.get("#add-button-id").should("be.disabled");
    inputForAdd.type("x");
    inputForAdd.should("have.value", "x");
    addButton.should("not.be.disabled");
    inputForAdd.type("costam");
    cy.get("#add-button-id").click();
    cy.get('p').should('have.text', 'xcostam')
    cy.get('#delete-button').should('be.visible')
    cy.get('#edit-button').should('be.visible')

  });

  xit('should change todo style after click', () =>{
    cy.get("#input-for-add-button").type("costam");
    cy.get("#add-button-id").click();
    cy.get('p').click()
    cy.get('p').should('have.class', 'koQTEn')
  })

  xit('should delete todo after delete button click', () =>{
    cy.get("#input-for-add-button").type("costam");
    cy.get("#add-button-id").click();
    cy.get('#delete-button').click();
    cy.get('p').should('not.exist')
  })

  xit('should display edit input after edit button click', () =>{
    cy.get("#input-for-add-button").type("costam");
    cy.get("#add-button-id").click();
    cy.get("#edit-button").click();
    cy.get('#to-do-input').should('be.visible')
  })

  xit('should input has defined value', () =>{
    cy.get("#input-for-add-button").type("costam");
    cy.get("#add-button-id").click();
    cy.get("#edit-button").click();
    cy.get('#to-do-input').should('have.value', 'costam')
  })

  xit('should button edit exist', () =>{
    cy.get("#input-for-add-button").type("costam");
    cy.get("#add-button-id").click();
    cy.get("#edit-button").click();
    cy.get("#edit-button").should('not.exist');
  })

  xit('should button delete exist', () =>{
    cy.get("#input-for-add-button").type("costam");
    cy.get("#add-button-id").click();
    cy.get("#edit-button").click();
    cy.get("#delete-button").should('not.exist');
  })

  it('should button save exist', () =>{
    cy.get("#input-for-add-button").type("costam");
    cy.get("#add-button-id").click();
    cy.get("#edit-button").click();
    cy.get("#save-button").should('exist');
  })

  it('should save button is disabled after input value clear', () =>{
    cy.get("#input-for-add-button").type("costam");
    cy.get("#add-button-id").click();
    cy.get("#edit-button").click();
    cy.get("#to-do-input").clear()
    cy.get("#save-button").should("be.disabled")
    
  })







});
