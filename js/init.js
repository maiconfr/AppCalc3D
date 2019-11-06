var tela = new Tela();
tela.telaPrincipal();


$("#botaoLogicaDeCalculo").click(function(event) {
  event.preventDefault();
  tela.telaDeLogica();
});
