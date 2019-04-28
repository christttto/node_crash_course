const http = require("http")
const path = require("path")
const fs = require("fs")

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err
  //         res.writeHead(200, { "Content-Type": "text/html" })
  //         res.end(content)
  //       }
  //     )
  //   }
  //   if (req.url === "/api/users") {
  //     const users = [
  //       { name: "Bob Smith", age: 40 },
  //       { name: "John Doe", age: 40 }
  //     ]
  //     res.writeHead(200, { "Content-Type": "application/json" })
  //     res.end(JSON.stringify(users))
  //   }
  //build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  )

  //extension of the file
  let extname = path.extname(filePath)

  //initial content type
  let contentType = "text/html"

  //check extension
  switch (extname) {
    case ".js":
      contextType = "text/javascript"
      break
    case ".css":
      contextType = "text/css"
      break
    case ".json":
      contextType = "text/json"
      break
    case ".png":
      contextType = "text/png"
      break
    case ".jpg":
      contextType = "text/jpg"
      break
  }

  //read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(content, "utf8")
          }
        )
      } else {
        //some server error
        res.writeHead(500)
        res.end(`Server Error: ${err.code}`)
      }
    } else {
      //success
      res.writeHead(200, { "Content-Type": contentType })
      res.end(content, "utf8")
    }
  })
})
const PORT = process.env.PORT || 5000 //fetch port number or that
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
