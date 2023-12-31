// const { v4: uuidv4 } = require("uuid"); //when type is not set to module in package.json
// import { v4 as uuidv4 } from "uuid"; when in package.json type is module
// console.log(uuidv4());

// const http = require("http");
// const myServer = http.createServer((req, res) => {
// 	res.statusCode = 200;
// 	// res.setHeader("content-type", "text/plain");
// 	// res.end("hello phla phla pyaar hai");
// 	res.setHeader("content-type", "text/html");
// 	res.end("<h1>bakchodi</h1>");
// });

// myServer.listen(3000, () => {
// 	console.log("jabtak samjh nhi aata tabtak try karte raho");
// });

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 3000;

const customers = [
	{
		id: 1,
		namee: "shubham",
		mail: "subhna",
	},
	{
		id: 2,
		namee: "shubham",
		mail: "subhna",
	},
];
app.get("/", (req, res) => {
	res.send({ customers: customers });
});

app.post("/", (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

app.listen(PORT, () => {
	console.log("server chla " + PORT);
});
