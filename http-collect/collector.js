var http = require("http")

var url = process.argv[2]

var finalData = ""

http.get(url, function(response){
  
  response.setEncoding("utf8")

  response.on("data", function(data){
    if (data == undefined || data == null) return false
    else finalData += data
  })

  response.on("error", function(error){
    
  })

  response.on("end", function(){
    console.log(finalData.length)
    console.log(finalData)
  })
})
