
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "geojson_lnglatBOUWJAAR_1": {
            "type": "geojson",
            "data": json_geojson_lnglatBOUWJAAR_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_geojson_lnglatBOUWJAAR_1_0",
            "type": "fill",
            "source": "geojson_lnglatBOUWJAAR_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'Bouwjaar'], 1850.0], ['<=', ['get', 'Bouwjaar'], 1860.0]], 1.0, ['all', ['>', ['get', 'Bouwjaar'], 1860.0], ['<=', ['get', 'Bouwjaar'], 1880.0]], 1.0, ['all', ['>', ['get', 'Bouwjaar'], 1880.0], ['<=', ['get', 'Bouwjaar'], 1900.0]], 1.0, ['all', ['>', ['get', 'Bouwjaar'], 1900.0], ['<=', ['get', 'Bouwjaar'], 1920.0]], 1.0, ['all', ['>', ['get', 'Bouwjaar'], 1920.0], ['<=', ['get', 'Bouwjaar'], 1940.0]], 1.0, ['all', ['>', ['get', 'Bouwjaar'], 1940.0], ['<=', ['get', 'Bouwjaar'], 1960.0]], 1.0, ['all', ['>', ['get', 'Bouwjaar'], 1960.0], ['<=', ['get', 'Bouwjaar'], 1980.0]], 1.0, ['all', ['>', ['get', 'Bouwjaar'], 1980.0], ['<=', ['get', 'Bouwjaar'], 2000.0]], 1.0, ['all', ['>', ['get', 'Bouwjaar'], 2000.0], ['<=', ['get', 'Bouwjaar'], 2019.0]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'Bouwjaar'], 1850.0], ['<=', ['get', 'Bouwjaar'], 1860.0]], '#30123b', ['all', ['>', ['get', 'Bouwjaar'], 1860.0], ['<=', ['get', 'Bouwjaar'], 1880.0]], '#466be3', ['all', ['>', ['get', 'Bouwjaar'], 1880.0], ['<=', ['get', 'Bouwjaar'], 1900.0]], '#28bceb', ['all', ['>', ['get', 'Bouwjaar'], 1900.0], ['<=', ['get', 'Bouwjaar'], 1920.0]], '#32f298', ['all', ['>', ['get', 'Bouwjaar'], 1920.0], ['<=', ['get', 'Bouwjaar'], 1940.0]], '#a4fc3c', ['all', ['>', ['get', 'Bouwjaar'], 1940.0], ['<=', ['get', 'Bouwjaar'], 1960.0]], '#eecf3a', ['all', ['>', ['get', 'Bouwjaar'], 1960.0], ['<=', ['get', 'Bouwjaar'], 1980.0]], '#fb7e21', ['all', ['>', ['get', 'Bouwjaar'], 1980.0], ['<=', ['get', 'Bouwjaar'], 2000.0]], '#d02f05', ['all', ['>', ['get', 'Bouwjaar'], 2000.0], ['<=', ['get', 'Bouwjaar'], 2019.0]], '#7a0403', '#ffffff']}
        }
],
}