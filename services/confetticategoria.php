<?php
header("content-type: application/json");

// my db settings
$server = "sql.confetti-sulmona.net";
$username = "confetti46274";
$password = "paolopaolo";
$database = "confetti46274";

// catturo categoria
$myid = $_GET[id];

// take all my query for create a big object json
$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());
mysql_select_db($database, $con);

// FACCIO QUERY DI UNA CATEGORIA 
$sql = "SELECT * FROM Prodotti ";

// FACCIO QUERY DI UNA CATEGORIA 
// FACCIO QUERY DI UNA CATEGORIA 
// FACCIO QUERY DI UNA CATEGORIA 

$result = mysql_query($sql) or die ("Query error: " . mysql_error());
$records = array();

while($row = mysql_fetch_assoc($result)) {
    $records[] = $row;
}

mysql_close($con);

$obj = $records;

// put array objetct in $_GET
echo $_GET['callback']. '('. json_encode($obj) . ')';   


// test var_dump
//var_dump($obj);



?>
