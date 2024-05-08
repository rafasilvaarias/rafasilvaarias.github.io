let assetsCharacters;
let hair = [];
let body = [];
let head = [];
let eyes = [];
let mouth = [];
let nose = [];
let fringe = [];

let separatedCharacterAssets;

let room = [];
let floor = [];
let wall = [];
let table = [];

let profileAssets = [];

let roomAssets = [];

let availablePixels;
let availablePixelsTable = [];
let tableHeight;

document.addEventListener("DOMContentLoaded", function () {
  fetch("../assetsCharacters/assetsCharacters.csv")
    .then((response) => response.text())
    .then((csv) => {
      const parsedData = csv
        .split("\n")
        .map((row) => row.split(",").map((value) => value.trim()));
      assetsCharacters = parsedData;
      console.log("fetchingCharacterAssets");
      console.log(assetsCharacters);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  fetch("../assetsRoom/assetsRoom.csv")
    .then((response) => response.text())
    .then((csv) => {
      const parsedData = csv
        .split("\n")
        .map((row) => row.split(",").map((value) => value.trim()));
      assetsRoom = parsedData;
      console.log("fetchingRoomAssets");
      console.log(assetsRoom);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function addSimilarnessNumber() {
  //console.log("addSimilarnessNumber");

  //ASSETS CHARACTERS
  for (let a = 0; a < assetsCharacters.length; a++) {
    let similarnessNumber = 0;
    for (let i = 0; i < person.personality.length; i++) {
      similarnessNumber =
        similarnessNumber +
        Math.abs(person.personality[i] - assetsCharacters[a][i + 2]);
    }
    assetsCharacters[a].splice(-4);
    assetsCharacters[a].push(similarnessNumber);
  }
  //console.log("assetsCharacters with similarness number");
  //console.log(assetsCharacters);

  //ASSETS ROOM
  for (let a = 0; a < assetsRoom.length; a++) {
    let similarnessNumber = 0;
    for (let i = 0; i < person.personality.length; i++) {
      similarnessNumber =
        similarnessNumber +
        Math.abs(person.personality[i] - assetsRoom[a][i + 2]);
    }
    assetsRoom[a].splice(-4);
    assetsRoom[a].push(similarnessNumber);
  }
  //console.log("assetsRoom with similarness number");
  //console.log(assetsRoom);
}

function separateAssets() {
  //sorting assets by similarness number
  assetsCharacters.sort((a, b) => a[2] - b[2]);
  assetsRoom.sort((a, b) => a[2] - b[2]);

  //separating assets by type
  for (let i = 0; i < assetsCharacters.length; i++) {
    if (assetsCharacters[i][1] == "hair") {
      hair.push(assetsCharacters[i]);
    } else if (assetsCharacters[i][1] == "body") {
      body.push(assetsCharacters[i]);
    } else if (assetsCharacters[i][1] == "head") {
      head.push(assetsCharacters[i]);
    } else if (assetsCharacters[i][1] == "eyes") {
      eyes.push(assetsCharacters[i]);
    } else if (assetsCharacters[i][1] == "mouth") {
      mouth.push(assetsCharacters[i]);
    } else if (assetsCharacters[i][1] == "nose") {
      nose.push(assetsCharacters[i]);
    } else if (assetsCharacters[i][1] == "fringe") {
      fringe.push(assetsCharacters[i]);
    }
  }

  separatedCharacterAssets = [hair, body, head, eyes, mouth, nose, fringe];
  //console.log(separatedCharacterAssets);

  for (let i = 0; i < assetsRoom.length; i++) {
    if (assetsRoom[i][1] == "room") {
      room.push(assetsRoom[i]);
    } else if (assetsRoom[i][1] == "floor") {
      floor.push(assetsRoom[i]);
    } else if (assetsRoom[i][1] == "wall") {
      wall.push(assetsRoom[i]);
    } else if (assetsRoom[i][1] == "table") {
      table.push(assetsRoom[i]);
    }
  }
  //console.log("wall array");
  //console.log(wall);
}

function setAssets() {
  availablePixels = [
    4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];
  //console.log("setting Assets");

  //ROOM ASSETS

  //ROOM
  for (let i = 0; i < 1; i++) {
    let randomNum = Math.random() ** 5;
    let index = Math.floor(randomNum * room.length);
    roomAssets.push([room[index][0], 0, 0]);
  }

  //WALL
  for (let i = 0; i < 1; i++) {
    let randomNum = Math.random() ** 5;
    let index = Math.floor(randomNum * wall.length);

    let img = new Image();
    img.src = "../assetsRoom/" + wall[index][0];
    img.onload = function () {
      let subXValue = img.width;
      let subYValue = img.height;

      let xValue = Math.random() * (184 - subXValue) + (40 + subXValue);
      let yValue = Math.random() * (152 - subYValue) + (35 + subYValue);
      console.log("xValue: " + xValue, "yValue: " + yValue);

      roomAssets.push([wall[index][0], xValue, yValue]);
    };
  }

  const tries = 60;
  const floorLine = 188;
  let yOffset = 0;

  const tableTableHeight = 49;
  const drawerTableHeight = 80;

  //TABLE

  const nTables = Math.floor(Math.random() * 3);
  for (let i = 0; i < 2; i++) {
    let randomNum = Math.random() ** 1.5;
    let index = Math.floor(randomNum * table.length);

    let img = new Image();
    img.src = "../assetsRoom/" + table[index][0];
    img.onload = function () {
      let subXValue = img.width;

      if (table[index][0] == "table.png") {
        yOffset = 16;
      } else {
        yOffset = 0;
      }

      for (let i = 0; i < tries; i++) {
        let firstPixel =
          availablePixels[Math.floor(Math.random() * availablePixels.length)];
        let lastPixel = firstPixel + Math.ceil(subXValue / 10);
        let available = checkPixel(firstPixel, lastPixel, availablePixels);

        if (available) {
          roomAssets.push([
            table[index][0],
            lastPixel * 10,
            floorLine + yOffset,
          ]);
          console.log("table added:" + table[index][0]);
          for (let i = firstPixel; i < lastPixel; i++) {
            availablePixels.splice(availablePixels.indexOf(i), 1);
            if (i != firstPixel && i != lastPixel) {
              availablePixelsTable.push(i);
            }
            if (table[index][0] == "table.png") {
              tableHeight = tableTableHeight;
            } else if (table[index][0] == "drawer.png") {
              tableHeight = drawerTableHeight;
            }
          }
          console.log("availablePixelsTable");
          console.log(availablePixelsTable);
        }
      }
    };
  }

  //FLOOR

  const nrFloor = Math.floor(Math.random() * 100);

  for (let i = 0; i < nrFloor; i++) {
    console.log("floornr"+nrFloor);
    let randomNum = Math.random() ** 1;
    
    let index = Math.floor(randomNum * floor.length);
    console.log("index"+index);
    let img = new Image();
    img.src = "../assetsRoom/" + floor[index][0];
    img.onload = function () {
      let subXValue = img.width;

      for (let i = 0; i < tries; i++) {
        //check table pixels
        let firstPixel =
          availablePixelsTable[
            Math.floor(Math.random() * availablePixelsTable.length)
          ];
        let lastPixel = firstPixel + Math.ceil(subXValue / 10);
        let available = checkPixel(firstPixel, lastPixel, availablePixelsTable);

        if (available) {
          roomAssets.push([
            floor[index][0],
            lastPixel * 10,
            floorLine - tableHeight,
          ]);
          for (let i = firstPixel; i < lastPixel; i++) {
            availablePixelsTable.splice(availablePixelsTable.indexOf(i), 1);
          }
        } else {

          firstPixel =
            availablePixels[Math.floor(Math.random() * availablePixels.length)];
          lastPixel = firstPixel + Math.ceil(subXValue / 10);
          available = checkPixel(firstPixel, lastPixel, availablePixels);

          if (available) {
            roomAssets.push([floor[index][0], lastPixel * 10, floorLine]);
            for (let i = firstPixel; i < lastPixel; i++) {
              availablePixels.splice(availablePixels.indexOf(i), 1);
            }
            updateObjects(profileAssets, roomAssets);
          }
        }
      }
    };
  }

  console.log("defined room assets!");
  console.log(roomAssets);
  //CHARACTER ASSETS

  for (let i = 0; i < separatedCharacterAssets.length; i++) {
    let randomNum = Math.random() ** 5;
    let index = Math.floor(randomNum * separatedCharacterAssets[i].length);
    profileAssets.push([separatedCharacterAssets[i][index][0], 0, 0]);
  }

  console.log("defined profile assets!");
  console.log(profileAssets);
}

function checkPixel(firstPixel, lastPixel, array) {
  this.array = array;
  let boolean = false;
  for (let i = firstPixel; i < lastPixel; i++) {
    if (array.includes(i)) {
      boolean = true;
    } else {
      boolean = false;
      break;
    }
  }
  console.log("checkPixel: " + boolean);
  return boolean;
}

function getImageSize(path) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = path;
    img.onload = function () {
      let width = img.width;
      let height = img.height;
      resolve([width, height]);
    };
    img.onerror = function () {
      reject(new Error("Failed to load image"));
    };
  });
}
