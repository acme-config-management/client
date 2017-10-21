function getJSON() {
  fetch('/getJSON')
    .then(function(response) {
      document.getElementById('info').innerHTML = response;
    })
    .catch(function(error) {
      document.getElementById('info').innerHTML = 'error: ' + error;
    });
}
