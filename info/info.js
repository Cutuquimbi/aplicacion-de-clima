const lugar = require('../lugar/lugar')
const clima = require('../clima/clima')

const getInfo = async(dir) => {

    try {
        let coor = await lugar.getLugarLatLng(dir);
        let t = await clima.getClima(coor.lat, coor.lng);

        return (`El clima de ${coor.direccion} es de ${t} ºC.`)

    } catch (e) {
        return `No se pudo determinar el clima de ${dir}`
    }

}

module.exports = {
    getInfo
}