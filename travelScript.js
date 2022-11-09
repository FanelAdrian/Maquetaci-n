

const nombre = document.getElementById("nombre");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const pasajeros = document.getElementById("pasajeros");
const fecha = document.getElementById("fecha");

const datosViajes = [];
// las funciones arrow pueden ver variables externas.
const solicitarInfo = () => {
    const viaje = {
        nombre: nombre.value,
        origen: origen.value,
        destino: destino.value,
        pasajeros: pasajeros.value,
        fecha: fecha.value,
    }
    datosViajes.push(viaje);
    console.log(datosViajes);
};

const mostrar = (destinos) =>{
    const alerta = document.getElementById("alerta");
    for( let destino of destinos){
        let h4 = document.createElement("h4");
        // en este caso usamos .innerHTML para poder diferenciar que no es "solo" un string
        // si no que tiene mas propiedades HTML.
        h4.innerHTML = `NOMBRE: ${destino.nombre}&nbsp &nbsp &nbsp
                         ORIGEN: ${destino.origen}&nbsp &nbsp &nbsp    
                         DESTINO: ${destino.destino}&nbsp &nbsp &nbsp  
                         PASAJEROS: ${destino.pasajeros} &nbsp &nbsp &nbsp
                         FECHA: ${destino.fecha}`;
        alerta.appendChild(h4);
    };
}


const viajesOferta = () =>{
    const destinos = datosViajes.filter((viaje)=>{
        if (viaje.destino.toLowerCase() == "canarias"){
            return true;
        }
        else if (viaje.destino.toLowerCase() == "mallorca"){
            return true;
        }
        else if (viaje.destino.toLowerCase() == "galicia"){
            return true;
        } else return false;
    });
    mostrar(destinos)
};
