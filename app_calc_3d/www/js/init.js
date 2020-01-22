criaNav();
telaPrincipal();

  $( document ).ready(function() {

    //ações dos botões do nav
    $("#botaoHome").click(function(event) {
      event.preventDefault();
      telaPrincipal();
      $('.sidenav').sidenav('close');
    });
    $("#botaoLogicaDeCalculo").click(function(event) {
      event.preventDefault();
      telaDeLogica();
      $('.sidenav').sidenav('close');
    });
  });


  //inicia o DB
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
