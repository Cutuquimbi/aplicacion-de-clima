const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c02341ea8d92c248927b76c5ab1c98b1&units=metric`)

    if (resp.data.main.temp === null) {
        throw new Error(`1`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}