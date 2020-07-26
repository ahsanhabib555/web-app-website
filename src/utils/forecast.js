const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude+ '&appid=49f9bb3cebbf07efb6ca155434c8b257'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,' The current weatehr is: '+ body.weather[0].main  + '. With a temeperature of '+(body.main.temp/10).toFixed(2) + ' degress out. The high today is ' +(body.main.temp_max/10).toFixed(2) + ' with a low of ' + (body.main.temp_min/10).toFixed(2) + ' and a humidity of ' + body.main.humidity + ' today')
        }
    })
}

module.exports = forecast