const secretData = require("../../../fixtures/secret.json");

context('Addint item into cart', () => {
    beforeEach(() => {
      cy.log('Autotest with custom command')
    })
    
    it('Order form check',()=>{
        cy.fixture('secret').then(data => {
            cy.once('uncaught:exception', () => false);

            // using custom command to check the order form session
            cy.orderInfo({email: secretData.correct_email, name: secretData.first_name, lastname: secretData.last_name, address: secretData.customer_address, appartament: secretData.customer_appartament, city: secretData.customer_city, post_code: secretData.customer_post_code, phone: secretData.customer_phone})
        })
    })

})