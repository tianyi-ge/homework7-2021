var video;
var volume;

window.addEventListener("load", function () {
  video = document.querySelector("#player1");
  volume = document.querySelector('#volume');
});

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  volume.innerHTML = video.volume * 100 + '%';
  video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate *= 0.95;
  console.log('New speed is %f', video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate /= 0.95;
  console.log('New speed is %f', video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
  console.log('Original location %f', video.currentTime);
  video.currentTime += 15;
  if (video.currentTime >= video.duration) {
    console.log('Going back to beginning');
    video.load();
  }
  console.log('New location %f', video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
  if (video.muted) {
    this.innerHTML = "Mute"
    video.muted = false;
  } else {
    video.muted = true;
    this.innerHTML = "Unmute"
  }
});

document.querySelector("#slider").addEventListener("click", function () {
  video.volume = this.value / 100;
  volume.innerHTML = this.value + "%";
  console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});