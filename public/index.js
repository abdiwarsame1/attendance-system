var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

// Elements for taking the snapshot
var snapshot = document.getElementById('snapshot');
var context = snapshot.getContext('2d');
var video = document.getElementById('videoElement');

// Trigger photo take
document.getElementById("takePhoto").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
    let snapData = context.getImageData(0, 0, 640, 480);
    console.log(snapData)
});