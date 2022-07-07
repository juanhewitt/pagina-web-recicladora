let BotonSesion = document.getElementById("IniciarSesion");

BotonSesion.addEventListener('click', function (p) {
    p.preventDefault();

    let formularioSesion = document.getElementById("FormularioSesion");
    let formulario = new FormData(formularioSesion);

    console.log(formulario.get("correoSesion"));

    fetch('php/ValidarDatos.php', {
        method: 'POST',
        body: formulario
    })
        .then(respuesta => respuesta.json())
        .then(datos => console.log(datos))
})