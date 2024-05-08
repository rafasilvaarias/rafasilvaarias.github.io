let searchButton = document
  .getElementById("searchForm")
  .getElementsByTagName("input")[0];

let typingTimer;
const delay = 300;

let searchedNames = [];

document.addEventListener("DOMContentLoaded", function () {
  let name = sessionStorage.getItem('searchedName');
  searchedNames = JSON.parse(sessionStorage.getItem('searchedNames'));

  

  if (name != null) {
    searchButton.value = name;
  }
  
  if (searchedNames != null) {
    loadSearches(searchedNames);
  } else {
    search(searchButton.value)
  }
  checkHearts();
});

searchButton.addEventListener("input", function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(function () {
    console.log("searching...");
    search(searchButton.value);
  }, delay);
});

async function search(name) {
    sessionStorage.setItem('searchedName', name);
    console.log("searching names..." + name);
    const matchingNames = firstNames.filter(item => item.includes(name));
    const veryMatchingNames = firstNames.filter(item => item.startsWith(name));
    console.log(matchingNames);
    console.log(veryMatchingNames);
    searchedNames = [];
    
    for (let i = 0; i<10; i++){
      if (matchingNames.length == 0 && veryMatchingNames.length == 0) {
        name = firstNames[Math.floor(Math.random() * firstNames.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)];
      } else {
        name = matchingNames[Math.floor(Math.random() * matchingNames.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)];
        name = veryMatchingNames[Math.floor(Math.random() * veryMatchingNames.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)];
      }
      sideComputerLi[i].getElementsByTagName('a')[0].innerHTML = name;
      sideComputerLi[i].getElementsByTagName('a')[0].href = '/homepage.html?' + name.replace(' ', '+');
      searchedNames.push(name);
    }
    console.log(searchedNames);
    sessionStorage.setItem('searchedNames', JSON.stringify(searchedNames));
    checkHearts();
}

function loadSearches(searchedNames) {
  for (let i = 0; i<10; i++){
    sideComputerLi[i].getElementsByTagName('a')[0].innerHTML = searchedNames[i];
    sideComputerLi[i].getElementsByTagName('a')[0].href = '/homepage.html?' + searchedNames[i].replace(' ', '+');
  }
}