
///describe é um agrupador de funcionalidades

describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
        cy.contains("Nova Transação").click()
        
        //type é utilizado para entrada de texto em formulário
        cy.get('#description').type("Freela")
        cy.get('#amount').type(2050)
        cy.get('#date').type(`2023-02-20`)
        
        cy.contains('button',"Salvar").click()
        cy.get('tbody tr .description').should("have.text", "Freela")

      
     });
});