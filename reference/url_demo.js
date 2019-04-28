const url = require("url")

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active")

//serialized url
console.log(myUrl.href)
console.log(myUrl.toString())

//host (root domain)
console.log(myUrl.host)
