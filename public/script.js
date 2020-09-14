const socket = io("/")
const videoGrid = document.getElementById("video-grid")
const myPeer = new Peer(undefined, {
  host: "/",
  port: "3004",
})
const myVideo = document.createElement("video")
myVideo.muted = true

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
})

myPeer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id)
})

socket.emit("join-room", ROOM_ID, "Jiwon")

socket.on("user-connected", (userId) => {
  console.log("User connected:" + userId)
})
