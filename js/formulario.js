const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#enviaremail')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
        event.preventDefault()
        const form = new FormData(this)
        $buttonMailto.setAttribute('href', `mailto:fabriziobarrios22@gmail.com.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
        $buttonMailto.click(
            Swal.fire({
                title: '<i class="fa-solid fa-circle-exclamation fa-xl"></i> muy bien',
                background: '#fe9393',
                confirmButtonColor: '#759eff',
                backdrop: false,
                timer: 5000,
                timerProgressBar: true
            })
        )
    }

//validacion de numeros
function SoloNumeros(evt) {
    if (window.event) {
        keynum = evt.keyCode;
    }
    else {
        keynum = evt.which;
    }

    if ((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13) {
        return true;
    }
    else {
        Swal.fire({
            title: '<i class="fa-solid fa-circle-exclamation fa-xl"></i> Ingresar solo numeros</span>',
            background: '#fe9393',
            confirmButtonColor: '#759eff',
            backdrop: false,
            timer: 5000,
            timerProgressBar: true
        });
        return false;
    }
}

//validacion de letras
function SoloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú";

    especiales = [8, 13];
    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        Swal.fire({
            title: '<i class="fa-solid fa-circle-exclamation fa-xl"></i> Ingresar solo letras',
            background: '#fe9393',
            confirmButtonColor: '#759eff',
            backdrop: false,
            timer: 5000,
            timerProgressBar: true
        });
        return false;
    }
}