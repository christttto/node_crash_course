const fs = require("fs")
const path = require("path")

//these are asynchronous
//Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, err => {
  if (err) throw err
  console.log("Folder Created")
})
