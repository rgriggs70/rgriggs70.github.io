//Hero video playback speed
var vid = document.getElementById("h-vid");
vid.playbackRate = 0.5;

// sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 75) {
    document.querySelector("#nav-menu").style.opacity = 0.9;
  } else {
    document.querySelector("#nav-menu").style.opacity = 1;
  }
});

// smooth scrolling
$("#nav-menu a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

$(document).ready(function () {
  $(".clicker").on("click", function () {
    $("#clickerMenu").toggle();

    // console.log("clicked");
  });
});

// let sample = document.getElementsByClassName("icon-fade");

// sample.addEventListener("click", () => {
//   console.log("clicked");
// });

// document.getElementById("play").addEventListener("click", () => {
//   var audio1 = document.getElementById("audio1");

//   audio1.play();
// });
// document.getElementById("play2").addEventListener("click", () => {
//   var audio2 = document.getElementById("audio2");
//   audio2.play();
// });
// document.getElementById("play3").addEventListener("click", () => {
//   var audio3 = document.getElementById("audio3");
//   audio3.play();
// });
// document.getElementById("play4").addEventListener("click", () => {
//   var audio4 = document.getElementById("audio4");
//   audio4.play();
// });
// document.getElementById("play5").addEventListener("click", () => {
//   var audio5 = document.getElementById("audio5");
//   audio5.play();
// });

// var a = document.getElementById("audio1");
// var b = document.getElementById("audio2");
// var c = document.getElementById("audio3");
// var d = document.getElementById("audio4");
// var e = document.getElementById("audio5");

// var myAudio = document.querySelectorAll(".song");
// var isPlaying = false;

// function togglePlay() {
//   if (!isPlaying) {
//     myAudio.pause;
//   } else {
//     myAudio.play;
//   }
// }
// myAudio.onplaying = function () {
//   isPlaying = true;
// };
// myAudio.onpause = function () {
//   isPlaying = false;
// };

// function togglePause() {
//   if (myAudio.paused && myAudio.currentTime > 0 && !myAudio.ended) {
//       myAudio.play();
//   } else {
//       myAudio.pause();
//   }
// }

// function togglePause() {
//   if (songs.paused && songs.currentTime > 0 && !songs.ended) {
//     songs.play();
//   } else {
//     songs.pause();
//   }
// }

window.addEventListener("load", () => {
  const songs = document.querySelectorAll(".song");
  const samples = document.querySelectorAll("div.samples");

  // const checkPlaying = (songs) => {
  //   if (songs.paused) {
  //     songs.play();
  //   } else {
  //     songs.pause();
  //   }
  // };

  // console.log(songs[1]);

  samples.forEach((sample, index) => {
    sample.addEventListener("mouseover", function () {
      // songs[index].currentTime = 0;
      // songs[index].play();

      songs[index].play();
      // console.log("paused");
    });
  });
  samples.forEach((sample, index) => {
    sample.addEventListener("mouseout", function () {
      songs[index].currentTime = 0;
      // songs[index].play();

      songs[index].pause();
      // console.log("paused");
    });
    // samples.forEach((sample, index) => {
    //   sample.addEventListener("mouseover", function () {
    //     // songs[index].currentTime = 0;
    //     // songs[index].play();
    //     if (songs.play && songs.currentTime > 0 && !songs.ended) {
    //       songs[index].pause();
    //       // console.log("play");
    //     } else {
    //       songs[index].play();
    //       // console.log("paused");
    //     }
    //   });

    // if (!songs.play) {
    //   songs[index].play();
    //   // console.log("on");
    // } else if (!song[index].currentTime > 0) {
    //   songs[index].pause();
    //   // console.log("off");
    // }
  });
});

let navLink = document.querySelectorAll(".nav-link");
let miniNav = document.querySelector(".nav-menu");

navLink.addEventListener("click", hideLinks);
// console.log("hello");

function hideLinks() {
  // miniNav.classList.add(".hidden-link");
  console.log("hello");
}
