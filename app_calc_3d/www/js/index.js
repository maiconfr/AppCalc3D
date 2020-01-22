$( document ).ready(function() {
$("#calc").click(function() {
  var peso = $("#peso").val();
  var tempo = $("#tempo").val();

  var calculo = peso*(0.16) + (tempo*0.8*0.4);

  var lucro = calculo*1 + calculo;
  lucro = lucro.toFixed(2);

  $("#resultado").text("R$ "+ lucro);
})

  M.AutoInit();
});
