const secretData = require("../../../fixtures/secret.json");

context('Addint item into cart', () => {
    beforeEach(() => {
      cy.visit('https://www.fervooor.com/collections/necklace/products/spider-killer-necklace-set')
    })
    
    it('"ADD TO CART" button check',()=>{
        cy.once('uncaught:exception', () => false);
        cy.fixture('secret').then(data => {

          cy.get('button[id="AddToCart--product-template"]').click()


          cy.wait(1500)
          cy.get('div[class="drawer__title"]')
          .should('exist')

          cy.get('input[type="text"]').invoke('val').then(parseFloat).should('be.gte', secretData.min_value)
        })
    })

})