  function criaNav(){
    $.get("views/nav.htm", function (data) {
         $('body').prepend(data); //comando .prepend() adiciona no inicio do elemento
         var elems = document.querySelectorAll('.sidenav');
         var instances = M.Sidenav.init(elems);
    });
  }

  function telaPrincipal(){

         $('#containerLogica').addClass("some");
         $('#containerPrincipal').removeClass("some");
  }

  function telaDeLogica(){
    $('#containerPrincipal').addClass("some");
    $('#containerLogica').removeClass("some");
  }

  function limpaTela(){
     $('#container').empty();
  }
