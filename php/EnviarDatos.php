<?php

$conexion = mysqli_connect('localhost','root','holaquehace12','basedatos');

if(!$conexion){
	echo"error";
}

$Nombre = $_POST['NombreRegistro'];
$Contrasena = $_POST['ContrasenaRegistro'];
$Email = $_POST['CorreoRegistro'];

$insertardatos = "INSERT INTO usuarios VALUES('','$Nombre','$Contrasena','$Email')";

$ejecutarInsertar = mysqli_query($conexion,$insertardatos);

if(!$ejecutarInsertar){
	echo "error en la conexion sql";
}

if($Nombre === '' || $Contrasena === '' || $Email === ''){
   echo json_encode('llena todos los campos');
}else{
   echo json_encode('correcto: <br>usuario: '.$Nombre.'<br>pass:'.$Contrasena);
}

