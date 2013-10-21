<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no"/>
    <title>ArcGIS API for JavaScript | Simple Geocoding</title>
    <link rel="stylesheet" href="http://js.arcgis.com/3.7/js/esri/css/esri.css">
    <style>
      html, body, #map {
        height:100%;
        width:100%;
        margin:0;
        padding:0;
      }
      #search {
        display: block;
        position: absolute;
        z-index: 2;
        top: 20px;
        left: 74px;
      }
    </style>
    <script src="http://js.arcgis.com/3.7/"></script>
    <script>
      var map, geocoder;

      require([
        "esri/map", "esri/dijit/Geocoder", "dojo/domReady!"
      ], function(Map, Geocoder) {
        map = new Map("map",{
          basemap: "gray",
          center: [-120.435, 46.159], // lon, lat
          zoom: 7 
        });

        geocoder = new Geocoder({ 
          map: map 
        }, "search");
        geocoder.startup();
      });
    </script>
  </head>
  <body>
    <div id="search"></div>
    <div id="map"></div>
  </body>
</html>
