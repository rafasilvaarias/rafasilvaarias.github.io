let imagesCharacter = [];
let imagePathsCharacter = [];

let imagesRoom = [];
let imagePathsRoom = [];

let randomTimeToBlink = Math.floor(Math.random() * 24*5 + 10);
let time = 1;

let skipNumber = 4;


function preload() {
  // Simulate asynchronous data loading
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();

      //////CHARACTER ASSETS
      // Populate imagePathsCharacter from yourArray
      for (let i = 0; i < profileAssets.length; i++) {
        imagePathsCharacter[i] = "./assetsCharacters/"+profileAssets[i][0];
      }

      // Load imagesCharacter
      for (let i = 0; i < imagePathsCharacter.length; i++) {
        imagesCharacter[i] = loadImage(imagePathsCharacter[i]);
      }

      //console.log("characterAssets paths" + imagePathsCharacter);
      //console.log("loaded character assets in p5.js" + imagesCharacter)

      //////ROOM ASSETS
      for (let i = 0; i < roomAssets.length; i++) {
        //console.log("setting path: " + "./assetsRoom/"+roomAssets[i][0]);
        imagePathsRoom[i] = "./assetsRoom/"+roomAssets[i][0];
      }

      for (let i = 0; i < imagePathsRoom.length; i++) {
        imagesRoom[i] = loadImage(imagePathsRoom[i]);
      }

      //console.log("roomAssets paths" + imagePathsRoom)
      //console.log("loaded room assets in p5.js" + imagesRoom)

    }, 600); // Adjust timeout as needed
  });
}

function setup() {
  const myCanvas = createCanvas(265, 220);
  myCanvas.parent("canvasDiv");
  frameRate(24);
}

function draw() {
  background(0);
  //console.log("imagePathsRoom " + imagePathsRoom.length)
  //console.log("imagesRoomLength "+imagesRoom.length)

  for (let i = 0; i < imagesRoom.length; i++){
    //console.log(","+imagesRoom[i][1]+","+imagesRoom[i][2]);
    if (i==0) {
      image(imagesRoom[i], roomAssets[i][1],roomAssets[i][2], width, height);
    } else {
      //console.log(roomAssets[i][1], roomAssets[i][2], imagesRoom[i].width, imagesRoom[i].height);
      image(
        imagesRoom[i], 
        roomAssets[i][1] - imagesRoom[i].width,
        roomAssets[i][2] - imagesRoom[i].height, 
        imagesRoom[i].width, 
        imagesRoom[i].height
      );
    }
    
  }

  time++;

  const closedEyes = 5;

  if (time % randomTimeToBlink < closedEyes) {
    skipNumber = 3;
    if (time % randomTimeToBlink == closedEyes-1) {
      randomTimeToBlink = Math.floor(Math.random() * 24*5 + closedEyes+1);
      console.log("randomTimeToBlink: "+randomTimeToBlink)
    }
  } else {
    skipNumber = 4;
  }

  for (let i = 0; i < imagesCharacter.length; i++) {
    if (i == skipNumber) {

    } else {
      image(imagesCharacter[i], profileAssets[i][1], profileAssets[i][2], width, height);
    }
   
  }

  
}


