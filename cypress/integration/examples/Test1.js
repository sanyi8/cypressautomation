/// <reference types="Cypress" />

const { find } = require("cypress/types/lodash");

describe('My First Test', () => {
  it('My first test case', () => {
    
    cy.visit("https://www.amazon.co.uk/");
    //fixture
    //Accept Button
    cy.get("#a-autoid-0").click();
    //Search for rc car
    cy.get('#twotabsearchtextbox').type("rc car");
    cy.get('#nav-search-submit-button').click();
    //wait 2sec
    //cy.wait(2000);
    //for item is on the first promo products
    //cy.get('.sg-col-inner').should('have.length',96);
    cy.get('.s-result-list').should('exist').find('.s-result-item').should('have.length', 48);
    cy.request('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
    //cy.get('.products')find('.product').shoould('have.lenght',4)

  })
})