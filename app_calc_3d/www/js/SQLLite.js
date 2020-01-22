
document.addEventListener('deviceready', function() {
var db = sqlitePlugin.openDatabase('mydb.db', '1.0', '', 1);


db.transaction(function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS valores ("+
                    "id int(90) NOT NULL,"+
                    "precoFilamento varchar(100) DEFAULT NULL,"+
                    "pesoPeca varchar(100) DEFAULT NULL,"+
                    "consumoImpressora varchar(100) DEFAULT NULL,"+
                    "taxaEnergia varchar(100) DEFAULT NULL,"+
                    "lucroImpressao varchar(100) DEFAULT NULL,"+
                    "erroTempo varchar(100) DEFAULT NULL,"+
                    "erroPeso varchar(100) DEFAULT NULL,"+
                    "padrao int(1) DEFAULT 0,"+
                    "PRIMARY KEY(id))");



    tx.executeSql("INSERT INTO valores(id,precoFilamento,pesoPeca,consumoImpressora,taxaEnergia,lucroImpressao,erroTempo,erroPeso,padrao)"+
                  "SELECT 1,'2','3','4','5','6','7','8',1 "+
                  "WHERE NOT EXISTS(SELECT 1 FROM valores WHERE id = 1);");

  }, function(error) {
    console.log('Transaction ERROR: ' + error.message);
  }, function() {
    console.log('Populated database OK');
  });


$("#btnTesteDb").click(function(){

  db.transaction(function(tx) {
     tx.executeSql('SELECT * FROM valores', [], function(tx, rs) {
       $("#container").append('OLHA SO MAICO: ' + rs.rows.item(0).id + rs.rows.item(0).precoFilamento+ rs.rows.item(0).pesoPeca+ rs.rows.item(0).consumoImpressora+ rs.rows.item(0).taxaEnergia+ rs.rows.item(0).lucroImpressao+ rs.rows.item(0).erroTempo+ rs.rows.item(0).erroPeso+ rs.rows.item(0).padrao );
     }, function(tx, error) {
       $("#container").append('SELECT error: ' + error.message);
     });
   });

});

})
