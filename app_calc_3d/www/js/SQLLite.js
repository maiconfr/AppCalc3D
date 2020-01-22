$("#btnTesteDb").click(function(){

  db.transaction(function(tx) {
     tx.executeSql('SELECT * FROM valores', [], function(tx, rs) {
       $("#container").append('OLHA SO MAICO: ' + rs.rows.item(0).id + rs.rows.item(0).precoFilamento+ rs.rows.item(0).pesoPeca+ rs.rows.item(0).consumoImpressora+ rs.rows.item(0).taxaEnergia+ rs.rows.item(0).lucroImpressao+ rs.rows.item(0).erroTempo+ rs.rows.item(0).erroPeso+ rs.rows.item(0).padrao );
     }, function(tx, error) {
       $("#container").append('SELECT error: ' + error.message);
     });
   });

});
