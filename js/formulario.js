const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#enviaremail')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
        event.preventDefault()
        const form = new FormData(this)
        $buttonMailto.setAttribute('href', `mailto:fabriziobarrios22@gmail.com.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
        $buttonMailto.click()
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
        alert("Ingresar solo numeros");
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
        alert("Ingresar solo letras");
        return false;
    }
}

//alerta
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `<div>${message}</div>`,
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="position: absolute; right: 0px; border:transparent; top: 50%; transform: translateX(-60%) translateY(-80%) rotate(-90deg); padding: 20px 18px; cursor: pointer;"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('<i class="fa-solid fa-thumbs-up"></i> Muy Bien, Revisare los correo y me contactare con usted', 'primary')
  })
}
const alertTrigge = document.getElementById('liveAlertBtn')
 if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      alert('<i class="fa-solid fa-thumbs-up"></i> Por Favor, ingrese los datos', 'danger')
    })
  }