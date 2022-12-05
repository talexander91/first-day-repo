var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl = 'www.themealdb.com/api';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
      console.log()
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
    
}

fetchButton.addEventListener('click', getApi);