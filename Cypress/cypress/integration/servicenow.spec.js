/// <reference types="Cypress" />

context('ServiceNow', () => {
    beforeEach(() => {
      cy.visit('https://dev79530.service-now.com/mcb-ssomp')
    })
  
    // https://on.cypress.io/interacting-with-elements
    it('Shall be able to login servicenow', () => {
        cy.get('#username').type('admin')
        cy.get('#password').type('Killer_2493')
        cy.get('#x79e5205bcb31120000f8d856634c9c5e > div > form > div > div > div.forgot-pwd-div.m-b > div > div:nth-child(2) > button').click()
    })


    it('Shall be able to submit agreement form', () => {
        // Login
        cy.get('#username').type('admin')
        cy.get('#password').type('Killer_2493')
        cy.get('#x79e5205bcb31120000f8d856634c9c5e > div > form > div > div > div.forgot-pwd-div.m-b > div > div:nth-child(2) > button').click()

        // Create Agreement View
        cy.get('#LicenseId')
            .type('0123456789').should('have.value', '0123456789')
        
        cy.get('#CountryId')
            .select('Malaysia')

        cy.get('#OveragePeriodId')
            .select('Annually')

        cy.get('#CRMId')
            .type('c37d3364-bcaa-4efd-98bc-b2838c964276').should('have.value', 'c37d3364-bcaa-4efd-98bc-b2838c964276')
        
        cy.get('#CustomerName')
            .type('MCCustomer').should('have.value', 'MCCustomer')
        
        cy.get('#StartDate')
            .type('2019-12-19')
        
        cy.get('#CurrencyCode')
            .select('MYR')
        
        cy.get('#MonthlySupportCost')
            .type('1000').should('have.value', '1000')

        cy.get('#SFDCAccountId')
            .type('b0292beb-33f2-4d78-89bb-30fc262b5520').should('have.value', 'b0292beb-33f2-4d78-89bb-30fc262b5520')

        cy.get('#OveragePolicyId')
            .select('Pool Based')

        cy.get('#AutoTransferUnusedConsumption')
            .check().should('be.checked')
        
        cy.get('#CreateAgreement')
            .click()
            
        cy.get('#jsonBody').screenshot()
    })
  })
  