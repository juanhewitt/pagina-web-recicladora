const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in');
IniciarSesion = document.getElementById('IniciarSesion'),

document.addEventListener('click', e => {
    if (e.target == $btnSignUp) {
        location.href = "indexSesion.html";
    } if (e.target == IniciarSesion) {
        location.href = "inicio.html";
    } if (e.target == $btnSignIn) {
        location.href = "index.html";
    }
});

document.addEventListener('click', a => {
    const Registrarse = document.getElementById('Registrarse'),
        NombreRegistro = document.getElementById('NombreRegistro'),
        ContrasenaRegistro = document.getElementById('ContrasenaRegistro'),
        CorreoRegistro = document.getElementById('CorreoRegistro');


    if (a.target == Registrarse) { 
        Swal.fire({
            icon: 'success',
            title: 'Usuario creado ' + NombreRegistro.value,
            showConfirmButton: false,
            timer: 3000
        })

        ContrasenaRegistro.value = "";
        NombreRegistro.value = "";
        CorreoRegistro.value = "";

        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
})
  
