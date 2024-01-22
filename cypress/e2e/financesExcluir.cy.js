
//describe é um agrupador de funcionalidades

describe('Transações', () => {

    // hooks -> executar antes ou depois / de cada ou de todos os testes
    // before executar todos os testes antes de todos
    // after executar uma vez depois de todos os testes
     //beforeEach  executa um codigo antes de cada teste
     //afterEach executa  um codigo depois de cada teste

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")

    });
     
    it('Cadastrar uma entrada', () => {

        criarTransacao("Freela",250)
      //  criarTransacao("Freela do Finde",250)
      ///  criarTransacao("Freela do Finder",250)
        // cy.contains("Nova Transação").click()
        
        // //type é utilizado para entrada de texto em formulário
        // cy.get('#description').type("Freela")
        // cy.get('#amount').type(2050)
        // cy.get('#date').type(`2023-02-20`)
        
        // cy.contains('button',"Salvar").click()
        cy.get('tbody tr .description').should("have.text", "Freela")

    });

    it('Cadastrar uma saída', () => {

    //it.skip('Cadastrar uma saída', () => {
   //pula este passo     it.skip('', () => {
//            cy.visit("https://devfinance-agilizei.netlify.app/#")

            criarTransacao("Cinema",-45)
            // codigo abaixo verifica se é Cinema
            cy.get('tbody tr .description').should("have.text", "Cinema")

        });
    
     it('Excluir transação', () => {
        criarTransacao("Freela",100)
        cy.contains(".description", "Freela")
        .parent().find("img").click()
     });   
    
    
    });
    
    
    
//
function criarTransacao(descricao, valor){
    cy.contains("Nova Transação").click()
       //type é utilizado para entrada de texto em formulário
       cy.get('#description').type(descricao)
       cy.get('#amount').type(valor)
       cy.get('#date').type(`2023-02-20`)
       
       //cy.contains('button',"Salvar").click()
       //cy.get('tbody tr .description').should("have.text", "Freela")
       cy.contains('button',"Salvar").click()

}    
