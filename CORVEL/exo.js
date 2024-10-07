let navbar = document.querySelector(".navbar");
let menu = document.querySelector("#menu");
let xx = document.querySelector(".xx");
menu.addEventListener("click", () => {
  navbar.classList.add("active");
});
xx.addEventListener("click", () => {
  navbar.classList.remove("active");
});
/*
if (Notification.permission === "granted") {
  new Notification("Bonsoir");
} else {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification("Hello !");
    }
  });
}
*/
/*
navigator.getBattery().then((battery) => {
  console.log(`Battery level: ${battery.level * 100}%`);
});
*/
/*
navigator.vibrate([200, 100, 200]);
*/
/*
const recognition = new webkitSpeechRecognition();
recognition.onresult = (event) => {
  console.log(event.results[0][0].transcript);
};
recognition.start();
*/
/*
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});
*/
/*
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const videoElement = document.querySelector("#localVideo");
    videoElement.srcObject = stream;
    const peerConnection = new RTCPeerConnection();
    stream
      .getTracks()
      .forEach((track) => peerConnection.addTrack(track, stream));
    peerConnection
      .createOffer()
      .then((offer) => peerConnection.setLocalDescription(offer))
      .then();
  })
  .catch((error) => {
    console.error("Erreur aux multimedias", error);
  });
  */
