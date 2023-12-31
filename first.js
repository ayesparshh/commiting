const { v4: uuidv4 } = require("uuid"); //when type is not set to module in package.json
// import { v4 as uuidv4 } from "uuid"; when in package.json type is module
console.log(uuidv4());

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
