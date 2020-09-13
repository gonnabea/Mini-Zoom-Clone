const socket = io("/")

console.log(socket)

socket.emit("join-room", ROOM_ID, "Jiwon")

socket.on("user-connected", (userId) => {
  console.log("User connected:" + userId)
})
