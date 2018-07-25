const axios = require('axios'); // libreria o api para crear promesas con htttp , requests



const getPlacesLatLng = async(address) => {



    let encodeUrl = encodeURI(address); //para inyectar codigo en este caso node/js y cambiarlo a url


    let result = await axios.get(` https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyAm_Q1IPj-V5D1idLAr3yiPpxiO6B7ZqGc`)
        //url de la api geocoding de google .

    if (result.data.status === 'ZERO_RESULTS') {

        throw new Error(`Error we do not have info about ${address} `);
    }



    let location = result.data.results[0];
    //location es igual al arreglo de result
    let geometry = location.geometry.location;
    //geometry es igual a location en la posicion de geometry 






    return {
        address: location.formatted_address,
        lat: geometry.lat,
        lng: geometry.lng
    }

}

module.exports = {
    getPlacesLatLng

}