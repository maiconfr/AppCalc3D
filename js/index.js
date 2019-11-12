  $( document ).ready(function() {
function calculo() {
  var peso = document.getElementById("peso").value;
  var tempo = document.getElementById("tempo").value;

  var calculo = peso*(0.16) + (tempo*0.8*0.4);

  var lucro = calculo*1 + calculo;
  lucro = lucro.toFixed(2)

  document.getElementById("resultado").innerHTML = "R$ "+ lucro;
}



$(document).ready(function(){
  $('.modal').modal();
});
});
