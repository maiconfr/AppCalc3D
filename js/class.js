class Tela {
  constructor() {
    this.criaNav()
  }

  criaNav(){
    $.get("views/nav.htm", function (data) {
         $('body').prepend(data); //comando .prepend() adiciona no inicio do elemento
         var elems = document.querySelectorAll('.sidenav');
         var instances = M.Sidenav.init(elems);
    });
  }

  telaPrincipal(){
    $.get("views/telaPrincipal.htm", function (data) {
         $('#container').append(data);

    });
      limpaTela();
  }

  telaDeLogica(){
    $.get("views/telaDeLogica.htm", function (data) {
         $('#container').append(data);

    });
      limpaTela();
  }

  limpaTela(){
     $('#container').empty();
  }


}
