const fs = require("fs")
const path = require("path")

//these are asynchronous
//Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err
//   console.log("Folder Created")
// })

//create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "hello world!",
  err => {
    if (err) throw err
    console.log("File written to")
  }
)
