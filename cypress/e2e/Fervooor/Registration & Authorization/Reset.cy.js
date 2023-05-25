const secretData = require("../../../fixtures/secret.json");

context('Password reset', () => {
    beforeEach(() => {
      cy.visit('https://www.fervooor.com/account/login#recover')
    })

    it('Enter a registered email in form',()=>{
        cy.once('uncaught:exception', () => false);
        cy.fixture('secret').then(data => {

            cy.log('enter a registered email in field')
            cy.get('input[id="RecoverEmail"]').click()
            .type(secretData.existed_email)

            cy.log('sumbit button click')
            cy.get('input[class="btn btn--full"]').eq(1).click()
            
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