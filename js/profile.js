let person;
let queryString = window.location.search;

let personFound = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

class Person {
    constructor(name, age, planetOfOrigin, gender, status, hobbies, personality, objects, roomObjects) {
        this.name = name;
        this.age = age;
        this.planetOfOrigin = planetOfOrigin;
        this.gender = gender;
        this.status = status;
        this.hobbies = hobbies;
        this.personality = personality;
        this.objects = objects;
        this.roomObjects = roomObjects;
    }
}

function setPerson(name){
    console.log("setting person");
    this.name = name;
    let age = getRandomInt(223) + 16;
    let planetOfOrigin = planets[getRandomInt(planets.length)];
    let gender = genders[getRandomInt(genders.length)];
    let status = statuses[getRandomInt(statuses.length)];
    let hobbies = hobbiesList[getRandomInt(hobbiesList.length)];
    let personality = [Math.floor((Math.random()*7)-3), Math.floor((Math.random()*7)-3), Math.floor((Math.random()*7)-3), Math.floor((Math.random()*7)-3)];
    
    let objects;
    let roomObjects;
    person = new Person(name, age, planetOfOrigin, gender, status, hobbies, personality, objects, roomObjects);
}

function updateObjects(a, b) {
    person.objects = a;
    person.roomObjects = b;
    console.log("checking again the room  objects");
    console.log(person.roomObjects);
    console.log(JSON.stringify(person.roomObjects));
    localStorage.setItem(person.name, JSON.stringify(person));
    console.log(getPerson(person.name));
}

function getPerson(name){
    console.log("getting "+name+" from local storage");
    console.log(localStorage.getItem(name));
    return JSON.parse(localStorage.getItem(name));
}

function checkPerson(name){
    console.log("checking "+name+" in local storage");
    if(localStorage.getItem(name) != null){
        return true;
    }
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    
    queryString = queryString.replace('?', '');
    queryString = queryString.replace(/\+/g, ' ');

    if (checkPerson(queryString)){
        console.log(queryString+" found");
        person = getPerson(queryString);
        personFound = true;

    } else {
        console.log(queryString+" not found");
        setPerson(queryString);
        personFound = false;
    }

    console.log(person);
});

setTimeout(function() {
    if (personFound == true){
        console.log("fetching assets");
        console.log(person.roomObjects);
        profileAssets = person.objects;
        roomAssets = person.roomObjects;
    } else {
        console.log("setting assets");
        addSimilarnessNumber();
        separateAssets();
        setAssets();
        console.log("saving assets");       
    }
}, 600);