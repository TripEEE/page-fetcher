//implement a node app
//it should take 2 command line arguments, a URL and a LOCAL FILE PATH
// It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

//There are two operations in this problem which will take an unknown amount of time and will need to be run asynchronously:

// You need to make an http request and wait for the response.
// After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.



// const net = require("net")

// const conn = net.createConnection({
//   host: "localhost",
//   port: 3000,
// })

// conn.setEncoding("utf8")

// conn.on("data", (data) => {
//   console.log("Server says: ", data)
// })

// conn.on("connect", () => {
//   conn.write("Hello from the client!")
// })

//pseudocode:

//make an http request and wait for response

const fs = require("fs")

const argv = process.argv.slice(2)
const url = argv[0]
const path = argv[1]

const request = require('request');

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(path, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});