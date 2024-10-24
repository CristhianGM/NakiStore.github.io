const productoPantalones = [
    {imagen: "../imagenes/polos.jpg", precio: "100", color: "negro"},
    {imagen: "../imagenes/polocafe.jpg", precio: "100", color: "negro"},
    {imagen: "../imagenes/poloGrisBlanco.jpg", precio: "100", color: "negro"},
    {imagen: "../imagenes/polo2.jpg", precio: "100", color: "negro"},
];

const contenedorTarjeta = document.getElementById("contenedor");
console.log("contenedor tarjetas");

productoPantalones.forEach(pantalon => {
    const tarjeta = document.createElement("div");
    tarjeta.innerHTML = `
    <div class="tarjeta">
        <div class="imagen">
        <img src="${pantalon.imagen}" alt="imagen del producto">
        </div>
        <div class="contenido">
            <p>Precio: ${pantalon.precio}</p>
            <p>Color: ${pantalon.color}</p>
        </div>
    </div>
    `;
    contenedorTarjeta.appendChild(tarjeta);
});
