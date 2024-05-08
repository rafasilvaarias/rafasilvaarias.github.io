let hearts = document.getElementsByClassName("heart");
let heartedPerson;
let heartedPersonName;

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    heartedPerson = document.getElementById("namePerson" + (i + 1));
    heartedPersonName = heartedPerson.getElementsByTagName("a")[0].innerHTML;

    if (hearts[i].innerHTML == "♡") {
        if (friends.length >= 10){
            alert('You can only have 10 friends');
        } else {
            friends.push(heartedPersonName);
            hearts[i].innerHTML = "❤︎";
        }
    } else {
      hearts[i].innerHTML = "♡";
      friends.splice(friends.indexOf(heartedPersonName), 1);
    }

    console.log(friends);
    localStorage.setItem('friends', JSON.stringify(friends));
  });
}
