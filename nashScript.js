// cuando se quiere pulsar algo se usa la funcion onclick
// creamos un array donde almacenaremos el resultado de nuestra funcion.
let carrito = [];
// en esta funcion le pasamos los parametros de las id del nombre y precio, para sacar (seleccionar) esos elementos HTM (su contenido, en este caso el texto dentro de las etiquetas <p> y<h5>)
// usamos el campo textContent del variable en el cual hemos almacenado el HTMLelement con la funcion document.getElementById(X) y de parametro (X) el id que le hemos indicado a la etiqueta HTML.

let añadirCarrito = (nombreProducto, precioProducto) => {
    let nombre = document.getElementById(nombreProducto);
    let precio = document.getElementById(precioProducto);
    carrito.push({
        nombre: nombre.textContent,
        precio: precio.textContent
    })
};

const mostrarCarrito = () => {
    let precioTotal = 0;
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = "";
    for (let producto of carrito) {
        precioTotal += parseInt(producto.precio);
        const h5 = document.createElement("h5");
        const h6 = document.createElement("h6");
        const div = document.createElement("div");
        h5.textContent = producto.nombre;
        h6.textContent = `${producto.precio} €`;
        let clases = ["d-flex", "flex-row", "justify-content-between"];
        // para añadir clases a un elemenoto HTML (en nuestro caso el div),
        //  se usa la funcion .classList.add(X) y de valor la clase a añadir (en nuestro caso como  queremos pasar mas de una, hemos creado un array de las clases y usamos un spread operator para añadirlas.)
        div.classList.add(...clases);
        div.appendChild(h5);
        div.appendChild(h6);
        modalBody.appendChild(div);
    }
    const total = document.getElementById("precioTotal");
    total.textContent =`${precioTotal} €`;
};

