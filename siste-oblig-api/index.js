const express = require("express")
const mongoose = require("mongoose")
const createServer = require("./server") // new

mongoose
	.connect("mongodb://localhost:27017/poll-api", { useNewUrlParser: true })
	.then(() => {
		const app = createServer()
		app.listen(3001, () => {
			console.log("Server has started!")
		})
	})