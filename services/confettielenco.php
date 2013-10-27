<?php
header("content-type: application/json");

// my db settings
$server = "sql.confetti-sulmona.net";
$username = "confetti46274";
$password = "paolopaolo";
$database = "confetti46274";


// take all my query for create a big object json
$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());
mysql_select_db($database, $con);

$sql = "SELECT * FROM cr_k2_items limit 10";
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
