let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 46.25022402234945,
        lng: 8.83339328232726, 
      },
      map,
      title: "Valle Verzasca",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -20.1055072433511,
        lng: -67.48783554801139,
      },
      map,
      title: "Salar de Uyuni",
    }),
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 51.38964535471648,
        lng: 30.092812424754424,
      }, 
      map,
      title: "Chernobyl",
    })
  );
}
