let friends = ['Rafa Arias', 'Sofia Santos', 'Xana Costa'];
let sideComputerLi = document.getElementById('sideComputerScreen').getElementsByTagName('li');

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('friends') != null){
        friends = JSON.parse(localStorage.getItem('friends'));
    }
    //console.log('i'+friends);
    checkHearts();
});

function checkHearts() {
    for (let i = 0; i < sideComputerLi.length; i++) {
        for (let a = 0; a < friends.length; a++) {
            console.log(sideComputerLi[i].getElementsByTagName('a')[0].innerHTML + ',' + friends[a]);
            if (sideComputerLi[i].getElementsByTagName('a')[0].innerHTML == friends[a]){
                console.log('changing');
                sideComputerLi[i].getElementsByTagName('span')[0].innerHTML = '❤︎';
                break;
            } else {
                sideComputerLi[i].getElementsByTagName('span')[0].innerHTML = '♡';
            }
        }
    };
}