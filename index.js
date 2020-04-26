/*
 * Primary file for the API
 *
 *
 *
 */

//Dependencies
const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

//The server should respond to all request with a string
const server = http.createServer((req, res) => {
  //get the url and parse it
  let parsedUrl = url.parse(req.url, true);

  //get the path
  let path = parsedUrl.pathname;
  let trimmedPath = path.replace(/^\/+|\/+$/g, "");

  //get the query string as an object
  let queryStringObject = parsedUrl.query;

  //get the HTTP method
  let method = req.method.toLowerCase();

  //get the Headers as an object
  let headers = req.headers;

  //get the payload, if any
  let decoder = new StringDecoder("utf-8");
  let buffer = "";
  req.on("data", (data) => {
    buffer += decoder.write(data);
  });
  req.on("end", () => {
    buffer += decoder.end();
    //send the response
    res.end("Hello World!----");

    //log the request path
    console.log(`Request received with this payload---->`, buffer);
  });
});

//Start the server and have it listen on port 3000
server.listen(3000, () => {
  console.log("The server is listening on port 3000");
});
