//function to start the Leaflet map
function createMap() {

    //Variables needed for running the function
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' + '<a href="http://mapbox.com">Mapbox</a>'; //You can add you name to the variable if you want to add yourself to the credits.
    
    var apitoken = 'pk.eyJ1IjoiaGNhcHBzNjUiLCJhIjoiY2w5c3NjZGt5MDc3dTN1bGU5cDVnbHBnMSJ9.QztrG7jpMzHMXwoY3-DGGw'; //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
     
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}'; //URL used for Stanard MaxBox Styles
    
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}'; //URL used for Custom MapBox Style
    
    
    
    //Variables for the different basemaps
    var modifiedTerrain = L.tileLayer(mbStyleUrl, {id: 'hcapps65/cl9ssl4mn005t14ng64ixj2us', token: apitoken,  attribution: mbAttr}); //For Custome basemaps - Replace your username and StyleID
    
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr}); //For MabBox Standard Basemaps
    
    
    
    //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//Coordinated to center the map
        zoom: 6, //zoom level
        layers:customeBasemap //basemap
    });
    
    //create the basemap control layer*/
    var baseLayers = {
        "Grayscale": grayscale,
        "Modified Terrain": modifiedTerrain
    };
    
    L.control.layers(baseLayers).addTo(map);  
};


//calling the function
$(document).ready(createMap);
