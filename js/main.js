// find elements
var dataContainer = $("#data-container");
var btn = $("#btn1");

// handle click and add class
btn.on("click", function(e) {

  $.ajax({
    url: "https://raw.githubusercontent.com/alv2017/DataSets/master/Europe/europe-capital-cities.json",
    dataType: "json"
  }).done(function(result) {
    let id = Math.floor(Math.random() * 44);
    let country = result['European Capitals'][id]['capital_name'];
    let latitude = result['European Capitals'][id]['latitude'];
    let longitude = result['European Capitals'][id]['longitude'];

    let dstring = "Country name: " + country + ", Latitude: " + latitude + ", Longitude: " + longitude;
    dataContainer.text(dstring);
  });

});