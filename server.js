const express = require("express")
const http = require("http")
const { Server } = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static("public"))
app.use(express.json())

// API endpoint
app.post("/send", (req, res) => {
  const message = req.body.message

  console.log("📩 Message from webpage:", message)

  io.emit("new_message", message)

  res.json({ status: "received" })
})

// websocket connection
io.on("connection", (socket) => {
  console.log("⚡ Client connected")
})

server.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000")
})