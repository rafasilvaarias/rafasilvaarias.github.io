let profileName = document.getElementById('profileName');
let statusContent = document.getElementById('statusContent');
let age = document.getElementById('age');
let planetOfOrigin = document.getElementById('planetOfOrigin');
let gender = document.getElementById('gender');
let interests = document.getElementById('interests');

let personalityIndicator = document.getElementById('personalityIndicator');
let computerFrame = document.getElementById('computerFrame');

let personalityString;


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

    personalityIndicator.innerHTML = makePersonalityString();

    sourceComputer();
};

function makePersonalityString() {
    
    personalityString = "";

    if(person.personality[0] < 0) {
        personalityString =+ "C";
    } else if (person.personality[0] > 0) {
        personalityString += "K";
    } else {
        personalityString += "N";
    }

    if(person.personality[1] < 0) {
        personalityString += "G";
    } else if (person.personality[1] > 0) {
        personalityString += "S";
    } else {
        personalityString += "N";
    }

    if(person.personality[2] < 0) {
        personalityString += "H";
    } else if (person.personality[2] > 0) {
        personalityString += "S";
    } else {
        personalityString += "N";
    }

    if(person.personality[3] < 0) {
        personalityString += "A";
    } else if (person.personality[3] > 0) {
        personalityString += "C";
    } else {
        personalityString += "N";
    }

    if (personalityString.startsWith("Na")) {
        personalityString = personalityString.substring(2);
    }

    console.log(personalityString);
    return personalityString;

}

function sourceComputer() {
    let maxAbsValue = Math.abs(person.personality[0]);
    let maxIndex = 0;

    for (let i = 1; i < person.personality.length; i++) {
        if (Math.abs(person.personality[i]) > maxAbsValue) {
            maxAbsValue = Math.abs(person.personality[i]);
            maxIndex = i;
        }
    }

    switch (maxIndex) {
        case 0:
            if (person.personality[maxIndex] > 0) {
                computerFrame.src = "./images/cute.png";
            } else {
                computerFrame.src = "./images/creepy.png";
            }
            break;
        case 1:
            if (person.personality[maxIndex] > 0) {
                computerFrame.src = "./images/serious.png";
            } else {
                computerFrame.src = "./images/goofy.png";
            }
            break;
        case 2:
            if (person.personality[maxIndex] > 0) {
                computerFrame.src = "./images/happy.png";
            } else {
                computerFrame.src = "./images/sad.png";
            }
            break;
        case 3:
            if (person.personality[maxIndex] > 0) {
                computerFrame.src = "./images/angry.png";
            } else {
                computerFrame.src = "./images/calm.png";
            }
            break;
        default:
            computerFrame.src = "./images/serious.png";
            break;
    }
}
