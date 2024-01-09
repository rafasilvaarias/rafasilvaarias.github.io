document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("movie");
  const tMargin = document.getElementById("tMargin");
  const margin = document.getElementById("margin");
  const body = document.body;

  var loopStart1 = 53.05;
  var loopEnd1 = 85.0;
  var loopStart2 = 316.0;
  var loopEnd2 = 365.0;
  var videoEnd = 762;

  const caption = document.getElementById("caption");

  let timerInterval = 0;


  function myFunction(event) {

    image.style.height = (image.offsetWidth / 16) * 9;

    tMargin.style.height = (tMargin.offsetWidth / 4) * 3 + "px";

    if (event) {
      const { clientX, clientY } = event;

      const imageHeight = image.offsetHeight;
      const imageWidth = image.offsetHeight;

      const bodyWidth = body.offsetWidth;
      const bodyHeight = body.offsetHeight;

      const tMarginWidth = tMargin.offsetWidth;
      const tMarginHeight = tMargin.offsetHeight;

      const xFactor = tMarginWidth / bodyWidth;
      const yFactor = (imageHeight - tMarginHeight) / bodyHeight; 

      const widthDiff = (clientX - bodyWidth / 2) * xFactor;
      const heightDiff = (clientY - bodyHeight / 2) * yFactor;

      const imageTop = (imageHeight - bodyHeight) / 2;

      if (
        video.currentTime >= loopStart2 &&
        video.currentTime <= loopEnd2 &&
        clientX < 50
      ) {
        console.log("eeee");
        videoJump(loopEnd2 + 10);
      }

      image.style.left = -widthDiff + "px";
      image.style.top = -heightDiff - imageTop + "px";
    }
    timerInterval = timerInterval + 1;

    if (
      timerInterval == 13 &&
      video.currentTime >= loopStart1 &&
      video.currentTime <= loopEnd1
    ) {
      videoJump(loopEnd1);
    }

    if (video.currentTime >= loopStart1 && video.currentTime <= loopEnd1) {
      caption.className = "";
    } else {
      caption.className = "hidden";
    }

    if (video.currentTime >= videoEnd){
      window.location.href = '../credits/credits.html';
    }
  }

  var video = image;

  video.addEventListener("timeupdate", function () {
    if (video.currentTime <= loopEnd1 && video.currentTime >= loopEnd1 - 1) {
      video.currentTime = loopStart1 + 1;
      console.log("loopedVideo1");
    }

    if (video.currentTime <= loopEnd2 && video.currentTime >= loopEnd2 - 1) {
      video.currentTime = loopStart2 + 1;
      console.log("loopedVideo2");
    }
  });

  var video = image;

  document.onmousemove = myFunction;

  var intervalId = setInterval(myFunction, 41.67);

  //piscar
  let canChangeImage = true;
  let gif = document.getElementById("gifImage");

  document.addEventListener("keydown", function (event) {

    console.log(event.keyCode);

    if (event.keyCode === 32 && canChangeImage) {
      timerInterval = 0;
      gif.src = "./video/mask1.gif";

      setTimeout(function () {
        gif.src = "./video/maskoff.png";

        setTimeout(function () {
          canChangeImage = true;
        }, 4000);
      }, 1080);

      canChangeImage = false;
    }

    if (event.key === "[") {
      video.currentTime = loopStart1;
    }

    if (event.key === "]") {
      video.currentTime = loopEnd2 - 3;
    }

    if (event.key === "=") {
      video.currentTime = videoEnd-3;
    }
  });

  function videoJump(time) {
    video.currentTime = time + 0.05;
    console.log("videoJumped to " + video.currentTime);
  }

  const playButton = document.getElementById("playButton");

  playButton.addEventListener("click", function () {
    video.play();
    document.getElementById('Home').classList.add('hidden');
  });
  
});
