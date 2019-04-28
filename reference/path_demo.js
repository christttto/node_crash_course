const path = require("path")

//Base flie name
console.log(path.basename(__filename))

//Directory name
console.log(path.dirname(__filename))

//File
console.log(path.extname(__filename))

//Create path object
console.log(path.parse(__filename))

//concatenate paths
console.log(path.join(__dirname, "test", "hello.html"))
