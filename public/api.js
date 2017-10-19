function getJSON() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
      document.getElementById('info').innerHTML = JSON.stringify(response, null, 2);
    })
    .catch(function(error) {
      console.log(error)
      document.getElementById('info').innerHTML = "error";
    });
}
