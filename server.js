import express from "express"
import http from "http"
import socketIo from "socket.io"
import { v4 as uuidV4 } from "uuid"

const app = express()
const server = http.Server(app)
const socketServer = socketIo(server)

app.set("view engine", "pug")
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.redirect(`/${uuidV4()}`)
})

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room })
})

socketServer.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit("user-connected", userId)

    socket.on("disconnect", () => {
      socket.to(roomId).broadcast.emit("user-disconnected", userId)
    })
  })
})

server.listen(3003)
