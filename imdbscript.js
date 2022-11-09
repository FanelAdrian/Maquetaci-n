
const añadirPelicula = () => {
    let titulo = document.getElementById("titulo");
    let portada = document.getElementById("portada");
    let estreno = document.getElementById("estreno");
    let nacionalidad = document.getElementById("nacionalidad");
    let generos = document.getElementById("generos");
    let argumento = document.getElementById("argumento");
    const nuevaPelicula = document.getElementById("nuevaPelicula");
    nuevaPelicula.innerHTML +=
        `<div class="container" id="nuevaPelicula" style="padding: 20px 0px ">
            <div class="card mb-3">
                <img class="card-img-top p-3" alt="Card image cap"
                    src="${portada.value}"
                    style="height:500px;">
                <div class="card-body">
                    <h3 class="card-title pb-2">${titulo.value}</h3>
                    <li class="list-group-item">
                        <p>Año de estreno</p>
                        <h5>${estreno.value}</h5>
                    </li>
                    <li class="list-group-item">
                        <p>Generos</p>
                        <h6>${generos.value}</h6>
                    </li>
                    <li class="list-group-item">
                        <p>Nacionalidad</p>
                        <h6>${nacionalidad.value}</h6>
                    </li>
                    <h6 class="card-text p-3">Argumento</h6>
                    <p>${argumento.value}</p>
                </div>
            </div>
        </div> `;

};

