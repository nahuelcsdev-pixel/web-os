const ventana  = document.querySelector('.ventana');
const barra = document.querySelector('.barra-superior');
const btnCerrar = document.querySelector('.btn-cerrar')
const btnMinimizar = document.querySelector('.btn-minimizar')
const reloj = document.querySelector('.reloj')
const iconoPanel = document.querySelector('#icono-panel')
const pesPanel = document.querySelector("#pestanya-panel")
const btnMaximizar = document.querySelector(".btn-maximizar")
const btnInicio = document.querySelector(".btn-inicio")
const menuInicio = document.querySelector(".menu-inicio")

let arrastrar = false;
let sitioX;
let sitioY;

barra.addEventListener('mousedown', (e) => {
    arrastrar = true;
    sitioX = e.clientX - ventana.offsetLeft;
    sitioY = e.clientY - ventana.offsetTop ;
});

document.addEventListener('mousemove', (e) => {
    if(arrastrar === true) {
        ventana.style.left = (e.clientX - sitioX) + 'px'
        ventana.style.top = (e.clientY - sitioY) + 'px'
    }
})
document.addEventListener('mouseup', (e) => {
    arrastrar = false
})

btnCerrar.addEventListener('click', () => {
    ventana.style.display = "none"
})
btnMaximizar.addEventListener("click", () => {
    ventana.classList.toggle("maximizada");
})
btnMinimizar.addEventListener('click', () => {
    ventana.style.display = "none"
    pesPanel.style.display = "block"
})

function actualizarReloj() {
    let ahora = new Date();
    let secs = ahora.getSeconds().toString().padStart(2, "0");
    let mins = ahora.getMinutes().toString().padStart(2, "0");
    let hra = ahora.getHours().toString().padStart(2, "0");
    reloj.textContent = hra + ":" + mins + ":" + secs;

}
setInterval(actualizarReloj, 1000);
actualizarReloj();

iconoPanel.addEventListener('dblclick', () => {
    ventana.style.display = "block"
})

pesPanel.addEventListener('click', () =>{
    ventana.style.display = "block"
    pesPanel.style.display = "none"
})

btnInicio.addEventListener('click', () => {
    menuInicio.classList.toggle("oculto")
})