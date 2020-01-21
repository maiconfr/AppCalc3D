
let tela = new Tela();
tela.telaPrincipal();

  $( document ).ready(function() {

    //ações dos botões do nav
    $("#botaoHome").click(function(event) {
      event.preventDefault();
      tela.telaPrincipal();
      $('.sidenav').sidenav('close');
    });
    $("#botaoLogicaDeCalculo").click(function(event) {
      event.preventDefault();
      tela.telaDeLogica();
      $('.sidenav').sidenav('close');
    });
  });
