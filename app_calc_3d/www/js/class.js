  function criaNav(){
    $.get("views/nav.htm", function (data) {
         $('body').prepend(data); //comando .prepend() adiciona no inicio do elemento
         var elems = document.querySelectorAll('.sidenav');
         var instances = M.Sidenav.init(elems);
    });
  }

  function telaPrincipal(){
    limpaTela();
    $.get("views/telaPrincipal.htm", function (data) {
         $('#container').empty();
         $('#container').append(data);
    });
  }

  function telaDeLogica(){
    limpaTela();
    $.get("views/telaDeLogica.htm", function (data) {
      $('#container').empty();
      $('#container').append(data);

    });
  }

  function limpaTela(){
     $('#container').empty();
  }
