const socket = io("/")

console.log(socket)

socket.emit("join-room", ROOM_ID, "Jiwon")
