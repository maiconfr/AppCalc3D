//inicia a nav
$.get("views/nav.htm", function (data) {
     $('body').prepend(data); //comando .prepend() adiciona no inicio do elemento
     var elems = document.querySelectorAll('.sidenav');
     var instances = M.Sidenav.init(elems);
});
// chama tela principal
$.get("views/telaPrincipal.htm", function (data) {
     $('#container').append(data);
});
