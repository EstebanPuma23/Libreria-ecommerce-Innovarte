console.log('profile success');

const $ = id => document.getElementById(id);

const inputName = $('name');
const imgPerfil = $('img-perfil');
const inputPasswordOrigin = $('password-origin');
const inputPassword = $('password');
const inputPassword2 = $('repeatpass');
const formPerfil = $('form-perfil');

/* expresiones regulares */
const regExLetras = /^[_A-zA-Z]*((-|\s)*[_A-zA-Z])*[:space:]*$/
const regExPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
const regExExt = /(.jpg|.jpeg|.png|.gif)$/i;



/* nombre */
inputName.addEventListener('focus', function () {
    $('error-name').innerText = "Solo letras"
    $('error-name').innerText = null;
    this.classList.remove('is-invalid');
})

inputName.addEventListener('keydown', function () {
    $('error-name').innerText = null;
})


inputName.addEventListener('keyup', function () {
    let [name, surname] =  inputName.value.split(' ')

    switch (true) {
        case this.value.split(' ').length != 2:
            $('error-name').innerText = "El nombre y apellido es requerido";
            this.classList.add('is-invalid')
            break;
        case this.value.split(' ').length < 2:
            $('error-name').innerText = "Solo un nombre y apellido";
            this.classList.add('is-invalid')
            break;
        case name.length <= 2 || surname.length <= 2:
            $('error-name').innerText = "Minimo dos caracteres";
            this.classList.add('is-invalid')
            break;
        case !regExLetras.test(this.value.trim()):
            $('error-name').innerText = "Solo se permiten letras";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-name').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
    
})
inputName.addEventListener('blur', function () {
    let [name, surname] =  inputName.value.split(' ')
    switch (true) {
        case this.value.split(' ').length != 2:
            $('error-name').innerText = "El nombre y apellido es requerido";
            this.classList.add('is-invalid')
            break;
        case this.value.split(' ').length < 2:
            $('error-name').innerText = "Solo un nombre y apellido";
            this.classList.add('is-invalid')
            break;
        case name.length <= 2 || surname.length <= 2:
            $('error-name').innerText = "Minimo dos caracteres";
            this.classList.add('is-invalid')
            break;
        case !regExLetras.test(this.value.trim()):
            $('error-name').innerText = "Solo se permiten letras";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-name').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})
inputName.addEventListener('focus', function () {
    let [name, surname] =  inputName.value.split(' ')
    switch (true) {
        case this.value.split(' ').length != 2:
            $('error-name').innerText = "El nombre y apellido es requerido";
            this.classList.add('is-invalid')
            break;
        case this.value.split(' ').length < 2:
            $('error-name').innerText = "Solo un nombre y apellido";
            this.classList.add('is-invalid')
            break;
        case name.length <= 2 || surname.length <= 2:
            $('error-name').innerText = "Minimo dos caracteres";
            this.classList.add('is-invalid')
            break;
        case !regExLetras.test(this.value.trim()):
            $('error-name').innerText = "Solo se permiten letras";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-name').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
    
})

//Imagen de Perfil

/* imgPerfil.addEventListener('change', function () {
    switch (true) {
        case !regExExt.exec(this.value):
            imageError.innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif"
            this.classList.add('is-invalid')
            preview.innerHTML = null;
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            $('btnImagen').classList.add('btn-outline-secondary');
            $('btnImagen').classList.remove('btn-outline-danger');
            imageError.innerHTML = null;
            btnImagen.innerText = "Cambiar imágenes"
            break;
    }
}) */

/* imgPerfil.addEventListener('change', function (e) {
    switch (true) {
        case !regExExt.exec(this.value):
            imageError.innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif"
            this.classList.add('is-invalid')
            preview.innerHTML = null;
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            $('btnImagen').classList.add('btn-outline-secondary');
            $('btnImagen').classList.remove('btn-outline-danger');
            imageError.innerHTML = null;
            btnImagen.innerText = "Cambiar imágenes"
            if (this.files) {
                [].forEach.call(this.files, readAndPreview);
            }

            function readAndPreview(file) {

                var reader = new FileReader();
                preview.innerHTML = null;
                reader.addEventListener("load", function () {
                    var image = new Image();
                    image.height = 150;
                    image.title = file.name;
                    image.src = this.result;
                    preview.appendChild(image);
                });
                reader.readAsDataURL(file);

            }
            break;
    }
})
 */
//password original
inputPasswordOrigin.addEventListener('keyup', function () {
    switch (true) {
        case !this.value:
            $('error-password').innerText = "Se requiere la contraseña actual";
            this.classList.add('is-invalid')
            break;
        default:
            $('error-password').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})
inputPasswordOrigin.addEventListener('focusout', function () {
    switch (true) {
        case !this.value:
            $('error-password').innerText = "Se requiere la contraseña actual";
            this.classList.add('is-invalid')
            break;
        default:
            $('error-password').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})


/* password */
inputPassword.addEventListener('keyup', function () {

    switch (true) {
        case !this.value && inputPasswordOrigin.value.trim().length > 0:
            $('error-password').innerText = "No debe estar vacio";
            this.classList.add('is-invalid')
            break;
        case !regExPassword.test(this.value):
            $('error-password').innerText = "Mayúscula, minúscula y número, 8 a 16 caracteres";
            this.classList.add('is-invalid')
            break;
        default:
            $('error-password').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})

inputPassword.addEventListener('blur', function () {
    switch (true) {
        case !this.value && inputPasswordOrigin.value.trim().length > 0:
            $('error-password').innerText = "La contraseña es requerida";
            this.classList.add('is-invalid')
            break;
        case !regExPassword.test(this.value):
            $('error-password').innerText = "Mayúscula, minúscula y número, 8 a 16 caracteres";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-password').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})


/* confirmar password */
inputPassword2.addEventListener('keyup', function () {
    switch (true) {
        case !this.value && inputPasswordOrigin.value.trim().length > 0:
            $('error-password').innerText = "Debe confirmar su contraseña";
            this.classList.add('is-invalid')
            break;
        case this.value !== inputPassword.value:
            $('error-password').innerText = "Las contraseñas no coinciden";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-password').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
});

inputPassword2.addEventListener('blur', function () {
    
    switch (true) {
        case !this.value && inputPasswordOrigin.value.trim().length > 0:
            $('error-password').innerText = "Debe confirmar su contraseña";
            this.classList.add('is-invalid')
            
            break;
        case this.value !== inputPassword.value:
            $('error-password').innerText = "Las contraseñas no coinciden";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-password').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
});

//boton
formPerfil.addEventListener('submit', function(e){
    e.preventDefault();
    if(!inputName.classList.contains('is-invalid')&&
        !inputPasswordOrigin.classList.contains('is-invalid')&&
        !inputPassword.classList.contains('is-invalid')&&
        !inputPassword2.classList.contains('is-invalid')){
        
            formPerfil.submit()
            swal("Cambios subidos");
    }

})