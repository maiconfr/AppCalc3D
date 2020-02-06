$( document ).ready(function() {
$("#calc").click(function() {
  var peso = $("#peso").val();
  var tempo = $("#tempo").val();

  var calculo = (peso+erroPeso)*(preco/1000) + ((tempo+erroTempo)*taxaEnergia*consumo);

  var precoFinal = calculo*(lucro/100)) + calculo;
  precoFinal = precoFinal.toFixed(2);

  $("#resultado").text("R$ "+ precoFinal);
})

  M.AutoInit();
});
