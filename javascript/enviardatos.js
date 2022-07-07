let BotonEnviar = document.getElementById('Registrarse');
BotonEnviar.addEventListener('click', function (e) {
    e.preventDefault();

    let formulario = document.getElementById("FormularioRegistro")
    let form = new FormData(formulario);

    console.log(form.get('NombreRegistro'));

    fetch('php/EnviarDatos.php', {
        method: 'POST',
        body: form
    })
        .then(res => res.json())
        .then(dato => console.log(dato))
})
