map = L.map('map',
  minZoom: 4
)
map.setView([37.535122, -97.342625], 4)

baselayer = new L.StamenTileLayer("toner")
map.addLayer(baselayer)

# Data
# name, latitude, longitude
# India Clarke, 28.074828, -82.433251
# Kristina Gomez Reinwald, 25.752251, -80.290644
# London Chanel, 39.975863, -75.172391
# Penny Proud, 29.966698, -90.070583
# Taja deJesus, 37.730552, -122.392110
# Yazmin Payne, 34.208435, -118.451057
# Papi Edwards, 38.157919, -85.713977
# Ty Underwood, 32.373986, -95.309928
# Lamia Beard, 36.869710, -76.279682
# Mercedes Williamson, 30.868229, -88.385948
# Bri Golec, 41.048134, -81.500018
# KC Haggard, 36.777476, -119.790681
dataSet =
  'type': 'FeatureCollection'
  'features': [
    {
      'type': 'Feature'
      'geometry':
        'type': 'Point'
        'coordinates': [
          -82.433251
          28.074828
        ]
      'properties': 'name': 'India Clarke'
    }
    {
      'type': 'Feature'
      'geometry':
        'type': 'Point'
        'coordinates': [
          -80.290644
          25.752251
        ]
      'properties': 'name': 'Kristina Gomez Reinwald'
    }
    {
      'type': 'Feature'
      'geometry':
        'type': 'Point'
        'coordinates': [
          -75.172391
          39.975863
        ]
      'properties': 'name': 'London Chanel'
    }
    {
      'type': 'Feature'
      'geometry':
        'type': 'Point'
        'coordinates': [
          -90.070583
          29.966698
        ]
      'properties': 'name': 'Penny Proud'
    }
    {
      'type': 'Feature'
      'geometry':
        'type': 'Point'
        'coordinates': [
          -122.386800
          37.734507
        ]
      'properties': 'name': 'Taja deJesus'
    }
    {
      'type': 'Feature'
      'geometry':
        'type': 'Point'
        'coordinates': [
          -118.451057
          34.208435
        ]
      'properties': 'name': 'Yazmin Payne'
    }
    {
      'type': 'Feature'
      'geometry':
        'type': 'Point'
        'coordinates': [
          -85.713977
          38.157919
        ]
      'properties': 'name': 'Papi Edwards'
    }
    {
      'type': 'Feature'
      'geometry':
        'type': 'Point'
        'coordinates': [
          -95.309928
          32.373986
        ]
      'properties': 'name': 'Ty Underwood'
    }
    {
      'type': 'Feature'
      'geometry':
        'type': 'Point'
        'coordinates': [
          -76.279682
          36.869710
        ]
      'properties': 'name': 'Lamia Beard'
    }
    {
      'type': 'Feature'
      'geometry':
        'type': 'Point'
        'coordinates': [
          -88.385948
          30.868229
        ]
      'properties': 'name': 'Mercedes Williamson'
    }
    {
      'type': 'Feature'
      'geometry':
        'type': 'Point'
        'coordinates': [
          -81.500018
          41.048134
        ]
      'properties': 'name': 'Bri Golec'
    }
    ,
    {
      'type': 'Feature'
      'geometry':
        'type': 'Point'
        'coordinates': [
          -119.790681
          36.777476
        ]
      'properties': 'name': 'KC Haggard'
    }
  ]

# Style markers
markerStyle =
  radius: 10
  color: "#c62828"
  fillColor: "#c62828"
  weight: 16
  opacity: .5
  fillOpacity: 1
# Buffer style
bufferStyle =
  fillColor: "#f4511e"
  radius: 40
  weight: 0
  opacity: 0
  fillOpacity: 0

# Zoom on click
zoomTo = (feat) ->
  map.fitBounds(feat.target.getBounds)


# On Hover Events


# Add data to map
dataLayer = L.geoJson dataSet,
  pointToLayer: (feature, latlng) ->
    return L.circleMarker(latlng, markerStyle)

bufferLayer = L.geoJson dataSet,
  pointToLayer: (feature, latlng) ->
    return L.circleMarker(latlng, bufferStyle)

dataLayer.addTo(map)
bufferLayer.addTo(map)

$('a#map-toggle, #map-exit').on 'click', (event) ->
  event.preventDefault()
  $('#title-section').toggleClass('map-modal')
