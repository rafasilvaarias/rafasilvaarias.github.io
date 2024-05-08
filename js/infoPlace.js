let profileName = document.getElementById('profileName');
let statusContent = document.getElementById('statusContent');
let age = document.getElementById('age');
let planetOfOrigin = document.getElementById('planetOfOrigin');
let gender = document.getElementById('gender');
let interests = document.getElementById('interests');

document.addEventListener('DOMContentLoaded', function() {
    infoPlace();
});

function infoPlace() {
    let name = person.name.replace(/ /g, "<br>");
    profileName.innerHTML = name;
    statusContent.innerHTML = person.status;
    age.innerHTML = '<img src="./icons/age.png">' + person.age + " yrs";
    planetOfOrigin.innerHTML = '<img src="./icons/planetOfOrigin.png">  ' + person.planetOfOrigin;
    let genderImgPath = '';
    if (person.gender == 'Ooblong'){
        genderImgPath = "<img src='./icons/ooblong.png'> ";
    } else if (person.gender == 'Female'){
        genderImgPath = "<img src='./icons/female.png'> ";
    } else {
        genderImgPath = "<img src='./icons/male.png'> ";
    }
    
    gender.innerHTML = genderImgPath + person.gender;
    interests.innerHTML = '<img src="./icons/hobbies.png">' + person.hobbies;
};
