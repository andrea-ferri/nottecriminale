<?php

header("content-type: application/json");

// my db settings
$server = "sql.confetti-sulmona.net";
$username = "confetti46274";
$password = "paolopaolo";
$database = "confetti46274";

// catturo id
$myid = $_GET[id];

// db  + query
$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());
mysql_select_db($database, $con);
$sql = "SELECT * FROM Prodotti where Id = $myid";
$result = mysql_query($sql) or die ("Query error: " . mysql_error());

$records = array();
while($row = mysql_fetch_assoc($result)) {
    $records[] = $row;
}

// var_dump($records);
// restituisco i dati 

echo $_GET['callback']. '('. json_encode($records) . ')';   




?>