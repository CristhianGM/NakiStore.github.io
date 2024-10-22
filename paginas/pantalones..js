const productoPantalones = [
    {imagen:"../imagenes/pantalones.jpg",modelo:"polo valenciaga negro", precio:"s/.100",color:"negro"},
    {imagen:"../imagenes/pantalonCrema.jpg",modelo:"polo valenciaga negro", precio:"s/.120",color:"negro"},
    {imagen:"../imagenes/pantalonAzul.jpg",modelo:"polo valenciaga negro", precio:"s/.110",color:"negro"},
    {imagen:"../imagenes/pantalonCafe.jpg",modelo:"polo valenciaga negro", precio:"s/.100",color:"negro"},
]

productoPantalones.forEach(producto => {
    // Seleccionar el elemento 'main' donde se agregará el carrusel
    const localizador = document.getElementById("contenedor");
    
    // Crear un nuevo div para el carrusel
    const carrusel = document.createElement(`div`);
    
    // Corregir la estructura del HTML
    carrusel.innerHTML = `
        <div class="carrusel">
            <div class="tarjeta-producto">
                <img src="${productoPantalones.imagen}" alt="pantalones">
                <div class="contenido">
                    <p>${productoPantalones.modelo}</p>
                    <p>${productoPantalones.precio}</p>
                </div>
            </div>
        </div>`;
    
    // Agregar el carrusel al elemento 'main'
    localizador.appendChild(carrusel);
});



/* const carrusel  = document.createElement(`div`);
carrusel.innerHTML=`< class="carrusel">
<div class="pantalones">
    <div class="tarjeta-producto">
        <img src="../imagenes/polos.jpg" alt="pantalones">
        <div class="contenido">
            <p>Polo Gallant algodon 100%</p>
            <p>s/. 150.00</p>
            <div class="color"></div>
        </div>
    </div>
</div>
</div>` */