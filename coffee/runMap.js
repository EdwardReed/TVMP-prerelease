// Generated by CoffeeScript 1.9.3
(function() {
  var baselayer, bufferLayer, bufferStyle, dataLayer, dataSet, map, markerStyle, zoomTo;

  map = L.map('map', {
    minZoom: 4
  });

  map.setView([37.535122, -97.342625], 4);

  baselayer = new L.StamenTileLayer("toner");

  map.addLayer(baselayer);

  dataSet = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-82.433251, 28.074828]
        },
        'properties': {
          'name': 'India Clarke'
        }
      }, {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-80.290644, 25.752251]
        },
        'properties': {
          'name': 'Kristina Grant Infiniti'
        }
      }, {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-75.172391, 39.975863]
        },
        'properties': {
          'name': 'London Chanel'
        }
      }, {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-90.070583, 29.966698]
        },
        'properties': {
          'name': 'Penny Proud'
        }
      }, {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-122.386800, 37.734507]
        },
        'properties': {
          'name': 'Taja de Jesus'
        }
      }, {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-118.451057, 34.208435]
        },
        'properties': {
          'name': 'Yazmin Vash Payne'
        }
      }, {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-85.713977, 38.157919]
        },
        'properties': {
          'name': 'Papi Edwards'
        }
      }, {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-95.309928, 32.373986]
        },
        'properties': {
          'name': 'Ty Underwood'
        }
      }, {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-76.279682, 36.869710]
        },
        'properties': {
          'name': 'Lamia Beard'
        }
      }, {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-88.385948, 30.868229]
        },
        'properties': {
          'name': 'Mercedes Williamson'
        }
      }, {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-81.500018, 41.048134]
        },
        'properties': {
          'name': 'Bri Golec'
        }
      }, {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-119.790681, 36.777476]
        },
        'properties': {
          'name': 'KC Haggard'
        }
      }, {
         'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-76.773816, 39.110046]
          },
          'properties': {
            'name': 'Mya Hall'
          } 
      }, {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-96.855928, 32.815806]
          },
          'properties': {
            'name': 'Shade Shuler'
        }  
      }, {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-83.112836, 42.426215]
          },
          'properties': {
            'name': 'Ashton O\'Hara'
          }
      }, {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-83.106023, 42.419807]
          },
          'properties': {
            'name': 'Amber Munroe'
          }
      }
    ]
  };

  markerStyle = {
    radius: 10,
    color: "#c62828",
    fillColor: "#c62828",
    weight: 16,
    opacity: .5,
    fillOpacity: 1
  };

  bufferStyle = {
    fillColor: "#f4511e",
    radius: 40,
    weight: 0,
    opacity: 0,
    fillOpacity: 0
  };

  zoomTo = function(feat) {
    return map.fitBounds(feat.target.getBounds);
  };

  dataLayer = L.geoJson(dataSet, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, markerStyle).bindLabel(feature.properties.name, {
        clickable: true,
        zoomAnimation: true,
        direction: "auto"
      });
      return L.circleMarker(latlng, markerStyle);
    }
  });

  bufferLayer = L.geoJson(dataSet, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, bufferStyle);
    }
  });

  dataLayer.addTo(map);

  bufferLayer.addTo(map);

  $('a#map-toggle, #map-exit').on('click', function(event) {
    event.preventDefault();
    return $('#title-section').toggleClass('map-modal');
  });

}).call(this);
