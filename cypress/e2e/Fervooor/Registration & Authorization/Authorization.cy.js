const secretData = require("../../../fixtures/secret.json");

context('Authorization', () => {
    beforeEach(() => {
      cy.visit('https://www.fervooor.com/account/login?return_url=%2Faccount')
    })

    it('Enter a valid data in form',()=>{
        cy.once('uncaught:exception', () => false);
        cy.fixture('secret').then(data => {

            cy.log('correct first name entering')
            cy.get('input[id="CustomerEmail"]').click()
            .type(secretData.existed_email)
            
            cy.log('correct password entering')
            cy.get('input[id="CustomerPassword"]').click()
            .type(secretData.existed_pass)

            cy.log('sumbit button click')
            cy.get('input[type="submit"]').eq(0).click()

            cy.wait(1500)
            cy.get('body').then((body)=>{
                if (body.find('p[class="shopify-challenge__message"]').length) {
                    cy.log('Captcha page opened. Test ended.')
                }
                else{
                    cy.log('Registarion done.')
                }
            })
        })
    })
    
})