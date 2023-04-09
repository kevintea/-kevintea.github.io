/// PANTALL HOME SIN ACTIVIDAD
let libreTareas = document.getElementById('libreTareas')

/// BOTONES
let btnNuevaTarea = document.getElementById('btnNuevaTarea')
let btnAgregar = document.getElementById('btnAgregar')
let btnCancelar = document.getElementById('btnCancelar')
let btnBorrar = document.getElementById('btnBorrar')
let btnModoOscuro = document.getElementById('btnModoOscuro')

/// GUARDAR COLOR DE PRIORIDAD DEL FORM
let color = document.querySelector('input[name="colorPrioridad"]:checked')

/// POSICION DE LAS TAREAS
let tareas = document.getElementById('tareas')

/// Tareas que iran insertandose en el HTML
let tareasPendientes = document.getElementById('tareasPendientes')

let agregarContainer = document.getElementById('agregarcontainer')

/// MENU HEADER - AVATARES
let menu = document.getElementById('menu')
let menuAvatares = document.getElementById('menuAvatares')

/// MODO OSCURO
let section = document.getElementById('section')
let imgBtnNuevaTarea = document.getElementById('imgBtnNuevaTarea')
let titleLibreTareas = document.getElementById('titleDescanso')

btnModoOscuro.addEventListener('click', () => {
  section.classList.toggle('modoClaro')
  imgBtnNuevaTarea.classList.toggle('modoClaroBtn')
  tareas.classList.toggle('modoClaro')
  titleDescanso.classList.toggle('modoClaroTxt')
})

/// INPUTS
let tareaInput = document.getElementById('tareaInput')
let select = document.getElementById('select')
let descripcionTxt = document.getElementById('descripcionTxt')

/// CONTADOR
let cantidadDeTareas = 0

btnNuevaTarea.addEventListener('click', () => {
  if (cantidadDeTareas <= 0) {
    libreTareas.classList.toggle('hidden')
    agregarContainer.classList.toggle('active')
    btnNuevaTarea.classList.toggle('hidden')
  }

  if (cantidadDeTareas >= 1) {
    libreTareas.classList.add('hidden')
    agregarContainer.classList.toggle('active')
    tareas.style.display = 'none'
    btnNuevaTarea.classList.toggle('hidden')
  }
})

btnCancelar.addEventListener('click', () => {
  if (cantidadDeTareas == 0) {
    libreTareas.classList.toggle('hidden')
    agregarContainer.classList.toggle('active')
    btnNuevaTarea.classList.remove('hidden')
  }
  if (cantidadDeTareas >= 1) {
    agregarContainer.classList.add('hidden')
    agregarContainer.classList.remove('active')
    tareas.style.display = 'flex'
    btnNuevaTarea.classList.toggle('hidden')
  }
})

btnAgregar.addEventListener('click', () => {
  let nombreTarea = tareaInput.value
  let descripcion = descripcionTxt.value
  let tipoDeTarea = select.value
  let color = document.querySelector('input[name="colorPrioridad"]:checked')
    .classList[1]
  console.log(nombreTarea, tipoDeTarea, descripcion, color)

  if (nombreTarea != '' && descripcion != '' && tipoDeTarea != '') {
    switch (color) {
      case 'white':
        colorFondo = 'white'
        break
      case 'green':
        colorFondo = 'green'
        break
      case 'yellow':
        colorFondo = 'yellow'
        break
      case 'red':
        colorFondo = 'red'
    }

    cantidadDeTareas++
    agregarContainer.classList.add('hidden')
    agregarContainer.classList.remove('active')
    tareas.style.display = 'flex'
    btnNuevaTarea.classList.toggle('hidden')

    tareaEntrante = `<div id="tareasPendientes" class="tareaspendientes">
  <div class="colortarea ${colorFondo}">
  </div>
  <div class="data">
    <p id="nombretarea"><strong>${nombreTarea}</strong></p>
    <p id="descripciontarea"><strong>${descripcion}</strong></p>
    <p id="tipodetareaarea"><strong>${tipoDeTarea}</strong></p>
  </div>
  <div class="botonestarea">
    <input type="checkbox" name="" id="completada" />
    <button id="btnBorrar" class="borrada">
      <img class="remover" src="./images/borrar.svg" alt="" />
    </button>
  </div>
</div>`
    tareas.innerHTML += tareaEntrante

    tareaInput.value = ''
    descripcionTxt.value = ''
    select.value = ''

    console.log(cantidadDeTareas)
  } else {
    alert('Completar todos los campos!')
  }
})

document.addEventListener('click', (e) => {
  if (e.target.classList == 'remover') {
    e.target.parentNode.parentNode.parentNode.remove()
    cantidadDeTareas--
    if (cantidadDeTareas == 0) {
      libreTareas.classList.remove('hidden')
      tareas.style.display = 'none'
    }
  }
  console.log(cantidadDeTareas)
})

menu.addEventListener('click', () => {
  menuAvatares.classList.toggle('active')
})

document.addEventListener('click', (e) => {
  if (e.target.classList == 'imgSelect gatito') {
    imgPeace.src = './images/gatito_descanso.png'
  }
  if (e.target.classList == 'imgSelect descanso') {
    imgPeace.src = './images/03_descanso.png'
  }
  if (e.target.classList == 'imgSelect perrito') {
    imgPeace.src = './images/perrito_descanso.png'
  }
})
