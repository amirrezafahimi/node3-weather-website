const request = require("postman-request");


const forecast = (lat, lng, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=745c752c134ec09b4ab16ed81b3c4c86&query=" + lat + "," + lng;

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to weather services!", undefined);
        } else if (response.body.error) {
            callback("Unable to find location!", undefined);
        } else {
            const {temperature, feelslike} = response.body.current;
            callback(undefined, "It is currently " + temperature + " degress out. It feels like " + feelslike + " degrees out.");
        }
    });
};

module.exports = forecast;