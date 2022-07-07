<?php

$conexion = mysqli_connect('localhost','root','holaquehace12','basedatos');

if(isset($CorreoSesion) || isset($ContrasenaSesion)){

$CorreoSesion = $_POST['CorreoSesion'];
$ContrasenaSesion = $_POST['ContrasenaSesion'];

$consulta = "SELECT * FROM usuarios WHERE Contrasena = $ContrasenaSesion AND Email = $CorreoSesion";
$q = mysqli_query($conexion , $consulta);

}
?>

