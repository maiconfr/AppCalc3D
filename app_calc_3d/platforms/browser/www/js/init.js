criaNav();
telaPrincipal();

  $( document ).ready(function() {

    //ações dos botões do nav
    $("#botaoHome").click(function(event) {
      event.preventDefault();
      telaPrincipal();
      $('.sidenav').sidenav('close');
    });
    $("#botaoLogicaDeCalculo").click(function(event) {
      event.preventDefault();
      telaDeLogica();
      $('.sidenav').sidenav('close');
    });
  });
  
