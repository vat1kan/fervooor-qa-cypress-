Cypress.Commands.add('orderInfo', (user) => {
  cy.session(
      user,
      () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://www.fervooor.com/collections/ring/products/purple-party-ring-set')
        cy.get('button[class="shopify-payment-button__button shopify-payment-button__button--unbranded BUz42FHpSPncCPJ4Pr_f jjzYeefyWpPZLH9pIgyw RWJ0IfBjxIhflh4AIrUw"]').click()
        cy.wait(1500)
        cy.get('input[id="email"]').type(user.email)
        cy.get('input[id="TextField1"]').type(user.name)
        cy.get('input[id="TextField2"]').type(user.lastname)
        cy.get('input[id="TextField3"]').type(user.address)
        cy.get('input[id="TextField4"]').type(user.appartament)
        cy.get('input[id="TextField5"]').type(user.city)
        cy.get('input[id="TextField6"]').type(user.post_code)
        cy.get('input[id="TextField7"]').type(user.phone)
        cy.get('button[type="submit"]').eq(0).click()
        cy.wait(1000)
        cy.get('button[type="submit"]').eq(0).click()
        cy.wait(1000)
        cy.get('span[class="AjwsM"]').contains('Pay now')
      }
    )
  })