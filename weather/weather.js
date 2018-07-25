const axios = require('axios');

const getWeather = async(lat, lng) => {


    let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=21de2207f4504dee3e494a89d6577b52`)

    return result.data.main.temp;
}


module.exports = {
    getWeather
}