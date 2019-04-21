var express = require("express");
var app = express();
const http = require("http");
const gju = require("geojson-utils");

var gameArea = require("./gameData").gameArea.geometry;
var players = require("./gameData").players;

function setDataStores(ga, pl) {
    gameArea = ga;
    players = pl;
}

app.get("/", (req, res) => res.send("GeoDemo API"));
app.get("/geoapi/isuserinarea/:lon/:lat", (req, res) => {
    //const lon = req.params.lon;
    //const lat = rqe.params.lat;
    const { lon, lat } = req.params;
    const point = { "type": "Point", "coordinates": [lon, lat] };
    let isInside = gju.pointInPolygon(point, gameArea);
    let result = { status: isInside };
    result.msg = isInside ? "point was inside the tested polygon" :
        "point was not inside the tested polygon"
    return res.json(result);
})


function geoServer(port, area, player) {
    return new Promise((resolve, reject) => {
        if (area && player) {
            setDataStores(area, player)
        }
        let server = http.createServer(app);
        server.listen(port, () => {
            resolve(server)
        })
    })
}

module.exports = geoServer;