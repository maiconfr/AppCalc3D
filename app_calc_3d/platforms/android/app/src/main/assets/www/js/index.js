$( document ).ready(function() {
$("#calc").click(function() {
  var peso = $("#peso").val();
  var tempo = $("#tempo").val();
  var preco = $("#preco-filamento").val();
  var consumo = $("#consumo-impressora").val();
  var taxaEnergia = $("#taxa-energia").val();
  var lucro = $("#lucro").val();
  var erroTempo = $("#erro-tempo").val();
  var erroPeso = $("#erro-peso").val();
  console.log("calculo:");
  var pesoComMargem = peso * (1 + (erroPeso/100))
    console.log("pesoComMargem: "+pesoComMargem);
  var cusdoDeMaterial = (preco/1000)*pesoComMargem
    console.log("cusdoDeMaterial: "+cusdoDeMaterial);
  var tempImpreCorrigido = tempo * ( 1 + (erroTempo/100))
    console.log("tempImpreCorrigido: "+tempImpreCorrigido);
  var custoDeEnergia = tempImpreCorrigido * taxaEnergia * consumo
    console.log("custoDeEnergia: "+custoDeEnergia);
  var custoFinal = custoDeEnergia + cusdoDeMaterial
    console.log("custoFinal: "+custoFinal);
  var valorFinal = custoFinal * (1 + (lucro/100))
    console.log("valorFinal: "+valorFinal);



  valorFinal = valorFinal.toFixed(2);

  $("#resultado").text("R$ "+ valorFinal);
})

  M.AutoInit();
});
