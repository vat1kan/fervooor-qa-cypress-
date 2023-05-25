const secretData = require("../../../fixtures/secret.json");

context('Registation', () => {
    beforeEach(() => {
      cy.visit('https://www.fervooor.com/account/register')
    })

    it('Enter a valid data in form',()=>{
        cy.once('uncaught:exception', () => false);
        cy.fixture('secret').then(data => {

            cy.log('correct first name entering')
            cy.get('input[id="FirstName"]').click()
            .type(secretData.first_name)

            cy.log('correct last name entering')
            cy.get('input[id="LastName"]').click()
            .type(secretData.last_name)
            
            cy.log('correct email entering')
            cy.get('input[id="Email"]').click()
            .type(secretData.correct_email)
            
            cy.log('correct password entering')
            cy.get('input[id="CreatePassword"]').click()
            .type(secretData.correct_pass)

            cy.get('input[type="submit"]').click()
 
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