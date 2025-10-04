/// <reference types='cypress' />

const {
  generateUser
} = require('../support/generateuser.js');

const {
  firstName,
  lastName,
  email,
  mobileNumber,
  currentAddress,
  birthDate
} = generateUser();

describe('student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form/');
  });

  it(`assert inputed data in window after filling required fields and clicking submit button`, () => {
    cy.get('[placeholder="First Name"]')
      .type(firstName);

    cy.get('[placeholder="Last Name"]')
      .type(lastName);

    cy.get('[placeholder="name@example.com"]')
      .type(email);

    cy.get('label[for="gender-radio-1"]')
      .click();

    cy.get('[placeholder="Mobile Number"]')
      .type(mobileNumber);

    cy.get('#dateOfBirthInput')
      .click();

    cy.get('[class="react-datepicker__year-select"]')
      .select('1997');

    cy.get('[class="react-datepicker__month-select"]')
      .select('May');

    cy.get('[class="react-datepicker__day react-datepicker__day--006"]')
      .click();

    cy.get('[id="subjectsContainer"]')
      .type(`History{enter}`);

    cy.get('label[for="hobbies-checkbox-1"]')
      .click();

    cy.get('[placeholder="Current Address"]')
      .type(currentAddress);

    cy.get('[id="state"]')
      .type(`NCR{enter}`);

    cy.get('[id="city"]')
      .type(`Delhi{enter}`);

    cy.get('[id="uploadPicture"]')
      .should('have.value', '');

    cy.get('button[id="submit"]')
      .should('be.enabled');

    cy.get('button[id="submit"]')
      .click();

    cy.contains('div', 'Thanks for submitting the form')
      .should('be.visible');

    cy.contains('.modal-body', firstName)
      .should('be.visible');

    cy.contains('.modal-body', lastName)
      .should('be.visible');

    cy.contains('.modal-body', email)
      .should('be.visible');

    cy.contains('.modal-body', 'Male')
      .should('be.visible');

    cy.contains('.modal-body', mobileNumber)
      .should('be.visible');

    cy.contains('.modal-body', birthDate)
      .should('be.visible');

    cy.contains('.modal-body', 'History')
      .should('be.visible');

    cy.contains('.modal-body', 'Sports')
      .should('be.visible');

    cy.contains('.modal-body', 'Parzęczewo')
      .should('be.visible');

    cy.contains('.modal-body', 'NCR Delhi')
      .should('be.visible');
  });
});
