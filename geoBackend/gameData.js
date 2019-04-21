const gameArea =
{
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          12.569561004638672,
          55.803210620009835
        ],
        [
          12.552909851074219,
          55.792885885889866
        ],
        [
          12.552909851074219,
          55.7805312057019
        ],
        [
          12.565956115722656,
          55.77889005498973
        ],
        [
          12.587242126464844,
          55.78506814503839
        ],
        [
          12.581405639648438,
          55.79809684152555
        ],
        [
          12.569561004638672,
          55.803210620009835
        ]
      ]
    ]
  }
}

const players = [
  {
    "type": "Feature",
    "properties": {name: "kurt"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.569389343261719,
        55.79819333412856
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: "bent"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.553081512451172,
        55.79742138660978
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: "martin"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.575225830078125,
        55.79124525555057
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: "jonas"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.56063461303711,
        55.792017325495095
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: "hanne"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.566642761230469,
        55.77705574592867
      ]
    }
  }
]

module.exports = {
  gameArea,
  players
}