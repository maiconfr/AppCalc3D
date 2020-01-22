
document.addEventListener('deviceready', function() {
var db = sqlitePlugin.openDatabase('mydb.db', '1.0', '', 1);
db.transaction(function (txn) {
  txn.executeSql('SELECT 42 AS `answer`', [], function (tx, res) {
    $("#container").append(res.rows.item(0)); // {"answer": 42}
  });
});
})

$("#btnIniciadb").click(function(){

  db.transaction(function(tx) {
     tx.executeSql('SELECT count(*) AS mycount FROM DemoTable', [], function(tx, rs) {
       $("#container").append('Record count (expected to be 2): ' + rs.rows.item(0).mycount);
     }, function(tx, error) {
       $("#container").append('SELECT error: ' + error.message);
     });
   });

});
