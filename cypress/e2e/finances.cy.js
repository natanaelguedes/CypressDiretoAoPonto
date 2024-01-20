
//describe é um agrupador de funcionalidades

describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
        cy.contains("Nova Transação").click()
    
    
    });
});