function getJSON(gatewayURI) {
  fetch(gatewayURI)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      document.getElementById('info').innerHTML = JSON.stringify(response, null, 2);
    })
    .catch(function(error) {
      console.log(error)
      document.getElementById('info').innerHTML = "error";
    });
}
