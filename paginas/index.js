// const productoPolos = [
//     {imagen:"../imagenes/polos.jpg",modelo:"polo valenciaga negro", precio:"s/.100",color:"negro"},
//     {imagen:"../imagenes/polo2.jpg",modelo:"polo valenciaga negro", precio:"s/.100",color:"negro"},
//     {imagen:"../imagenes/poloGrisBlanco.jpg",modelo:"polo valenciaga negro", precio:"s/.100",color:"negro"},
//     {imagen:"../imagenes/polocafe.jpg",modelo:"polo valenciaga negro", precio:"s/.100",color:"negro"},
// ]

// productoPolos.forEach(polos =>{
//     const polo = document.createElement("")
// })
document.getElementById('buscar').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const buscador = document.querySelector('.buscador');
    buscador.classList.toggle('visible'); // Alternar la clase 'visible' para mostrar/ocultar el buscador
});
