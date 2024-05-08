let searchPageButton = document.getElementById('searchPageButton');
let friendsPageButton = document.getElementById('friendsPageButton');
let searchForm = document.getElementById('searchForm');

searchPageButton.addEventListener('click', function() {
    searchPageButton.classList.add('selected');
    friendsPageButton.classList.remove('selected');
    searchForm.classList.remove('hidden');
      if (searchedNames != null) {
        loadSearches(searchedNames);
      }
      checkHearts();
});

friendsPageButton.addEventListener('click', function() {
    friendsPageButton.classList.add('selected');
    searchPageButton.classList.remove('selected');
    searchForm.classList.add('hidden');
    for (let i = 0; i < sideComputerLi.length; i++) {
        if (friends[i] == undefined) {
            sideComputerLi[i].getElementsByTagName('a')[0].innerHTML = '';
            sideComputerLi[i].getElementsByTagName('span')[0].innerHTML = '';
        } else{
            sideComputerLi[i].getElementsByTagName('a')[0].innerHTML = friends[i];
            sideComputerLi[i].getElementsByTagName('a')[0].href = '/homepage.html?' + friends[i].replace(' ', '+');
            sideComputerLi[i].getElementsByTagName('span')[0].innerHTML = '❤︎';
        }
    }
});
