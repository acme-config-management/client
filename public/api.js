function getJSON() {
  fetch('/getJSON')
    .then(function(response) {
      document.getElementById('info').innerHTML = JSON.stringify(response, null, 2);
    })
    .catch(function(error) {
      document.getElementById('info').innerHTML = 'error: ' + error;
    });
}
