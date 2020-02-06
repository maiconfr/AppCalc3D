$( document ).ready(function() {
$("#calc").click(function() {
  var peso = $("#peso").val();
  var tempo = $("#tempo").val();
  var preco = $("#preco-filamento").val();
  var consumo = $("#consumo-impressora").val();
  var taxa = $("#taxa-energia").val();
  var lucro = $("#lucro").val();
  var erroTempo = $("#erro-tempo").val();
  var erroPeso = $("#erro-peso").val();

  var calculo = (peso+erroPeso)*(preco/1000) + ((tempo+erroTempo)*taxaEnergia*consumo);

  var precoFinal = calculo*(lucro/100)) + calculo;
  precoFinal = precoFinal.toFixed(2);

  $("#resultado").text("R$ "+ precoFinal);
})

  M.AutoInit();
});
