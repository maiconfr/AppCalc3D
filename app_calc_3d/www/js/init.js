telaPrincipal();

$(document).ready(function() {

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



$("#btnSalvarVariaveis").click(function() {
  console.log("CLICOU NO BUTÃUM");
  var precoFilamento = $("#preco-filamento").val();
  var consumoImpressora = $("#consumo-impressora").val();
  var taxaEnergia = $("#taxa-energia").val();
  var lucro = $("#lucro").val();
  var erroTempo = $("#erro-tempo").val();
  var erroPeso = $("#erro-peso").val();

  var db = sqlitePlugin.openDatabase('mydb.db', '1.0', '', 1);

  db.transaction(function(tx) {
    tx.executeSql("SELECT * FROM valores WHERE id=2", [],
      function(tx, rs) {
        if (rs.rows.length > 0) {
          console.log("ATUALIZANDO DADOS");
          tx.executeSql("UPDATE valores SET precoFilamento='" + precoFilamento + "',consumoImpressora='" + consumoImpressora + "',taxaEnergia='" + taxaEnergia + "',lucroImpressao='" + lucro + "',erroTempo='" + erroTempo + "',erroPeso='" + erroPeso + "',padrao='0'" +
            "WHERE id=2");
        } else {
          console.log("INSERINDO DADOS NO CU");
          tx.executeSql("INSERT INTO valores (id,precoFilamento,consumoImpressora,taxaEnergia,lucroImpressao,erroTempo,erroPeso,padrao)" +
            " VALUES (2,'" + precoFilamento + "','" + consumoImpressora + "','" + taxaEnergia + "','" + lucro + "','" + erroTempo + "','" + erroPeso + "','0')");
        }
      })
    },
    function(error) {
        console.log('Transaction ERROR: ' + error.message);
      },
      function() {
        console.log('jÓINHA');
      });

  })


document.addEventListener('deviceready', function() {
  var db = sqlitePlugin.openDatabase('mydb.db', '1.0', '', 1);


  db.transaction(function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS valores (" +
      "id int(90) NOT NULL," +
      "precoFilamento varchar(100) DEFAULT NULL," +
      "consumoImpressora varchar(100) DEFAULT NULL," +
      "taxaEnergia varchar(100) DEFAULT NULL," +
      "lucroImpressao varchar(100) DEFAULT NULL," +
      "erroTempo varchar(100) DEFAULT NULL," +
      "erroPeso varchar(100) DEFAULT NULL," +
      "padrao int(1) DEFAULT 0," +
      "PRIMARY KEY(id))");



    tx.executeSql("INSERT INTO valores(id,precoFilamento,consumoImpressora,taxaEnergia,lucroImpressao,erroTempo,erroPeso,padrao)" +
      "SELECT 1,'2','3','4','5','6','7',1 " +
      "WHERE NOT EXISTS(SELECT 1 FROM valores WHERE id = 1);");

  }, function(error) {
    console.log('Transaction ERROR: ' + error.message);
  }, function() {
    console.log('Populated database OK');
  });

  db.transaction(function(tx) {

    tx.executeSql("SELECT * FROM valores WHERE id=2", [], function(tx, rs) {
        console.log("TABELA TAMANHO "+ rs.rows.length);
        if (rs.rows.length > 0) {

          tx.executeSql('SELECT * FROM valores WHERE id=2', [], function(tx, rs) {
            //rs.rows.item(0).id
            $("#preco-filamento").val(rs.rows.item(0).precoFilamento);
            $("#preco-filamento").parent().find("label").addClass("active");

            $("#consumo-impressora").val(rs.rows.item(0).consumoImpressora);
            $("#consumo-impressora").parent().find("label").addClass("active");

            $("#taxa-energia").val(rs.rows.item(0).taxaEnergia);
            $("#taxa-energia").parent().find("label").addClass("active");

            $("#lucro").val(rs.rows.item(0).lucroImpressao);
            $("#lucro").parent().find("label").addClass("active");

            $("#erro-tempo").val(rs.rows.item(0).erroTempo);
            $("#erro-tempo").parent().find("label").addClass("active");

            $("#erro-peso").val(rs.rows.item(0).erroPeso);
            $("#erro-peso").parent().find("label").addClass("active");

          }, function(tx, error) {
            $("#container").append('SELECT error: ' + error.message);
          });

        } else {
          tx.executeSql('SELECT * FROM valores WHERE id=1', [], function(tx, rs) {
            //rs.rows.item(0).id
            $("#preco-filamento").val(rs.rows.item(0).precoFilamento);
            $("#preco-filamento").parent().find("label").addClass("active");

            $("#consumo-impressora").val(rs.rows.item(0).consumoImpressora);
            $("#consumo-impressora").parent().find("label").addClass("active");

            $("#taxa-energia").val(rs.rows.item(0).taxaEnergia);
            $("#taxa-energia").parent().find("label").addClass("active");

            $("#lucro").val(rs.rows.item(0).lucroImpressao);
            $("#lucro").parent().find("label").addClass("active");

            $("#erro-tempo").val(rs.rows.item(0).erroTempo);
            $("#erro-tempo").parent().find("label").addClass("active");

            $("#erro-peso").val(rs.rows.item(0).erroPeso);
            $("#erro-peso").parent().find("label").addClass("active");

          }, function(tx, error) {
            $("#container").append('SELECT error: ' + error.message);
          });
        }
      });
  })
})
