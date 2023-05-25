context('Find in body', () => {
    beforeEach(() => {
      cy.visit('https://www.fervooor.com/collections/sale')
    })
    
    it('find an element',()=>{
        cy.once('uncaught:exception', () => false);
        cy.wait(1500)
        cy.get('body').then((body)=>{
            if (body.find('header[class="section-header123 text-center123"]').length) {
                cy.log('exist')
            }
            else{
                cy.log('pass')
            }
        })
    })

})