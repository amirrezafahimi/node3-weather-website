const request = require("postman-request");

const geocode = (address, callback) => {
    const url = "http://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYW1pcnJlemFmYWhpbWkiLCJhIjoiY2t1MW5mampsMDc4ODMxbzZ3YWk1emowdiJ9.2SCdtnaX1t24osklLk_tPA&limit=1";

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to location services!", undefined);
        } else if (response.body.features.length === 0) {
            callback("Unable to find location. Try another search.", undefined);
        } else {
            const [lng, lat] = response.body.features[0].center;
            callback(undefined, {
                latitude: lat,
                longitude: lng,
                location: response.body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;