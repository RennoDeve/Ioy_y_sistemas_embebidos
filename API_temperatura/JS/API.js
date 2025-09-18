const api_key = "c4a2f20875d08e180e9ed04b0c199214";

const lat = 25.6866;
const lon = -100.3161;

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${api_key}`;

async function obtenerTemperatura() {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        if (datos.current && datos.current.temp) {
            document.getElementById("temp").innerHTML = datos.current.temp;
        } else {
            document.getElementById("temp").innerHTML = "No se pudo obtener la temperatura";
        }
    } catch (error) {
        console.error("Error al obtener la temperatura: ", error);
        document.getElementById("temp").innerHTML = "Error al obtener la temperatura";
    }
}

obtenerTemperatura();
// actualizar cada 60 segundos
setInterval(obtenerTemperatura, 60000);
