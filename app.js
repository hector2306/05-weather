const place = require('./places/places');
const weather = require('./weather/weather');


const argv = require('yargs').options({ // creamos nuestro comando que reconozca la consola
    address: {
        alias: 'd', // este sera el comado
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async() => {

    try {
        let coors = await place.getPlacesLatLng(argv.address);
        //coordinates

        let temp = await weather.getWeather(coors.lat, coors.lng);
        return `El clima en ${coors.address} es de ${temp}`;

    } catch (e) {
        return `Error we ca not find the weather on ${address}`;
    }

}


getInfo(argv.address)
    .then(message => console.log(message))
    .catch(e => console.log(e));