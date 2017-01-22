var fs = require("fs");

var directoryPath = process.argv[2];

var fileExt = "." + process.argv[3];

fs.readdir(directoryPath, function(err, listOfFiles) { 

  listOfFiles.map(function(file) {

    if (file.indexOf(fileExt) != -1) console.log(file);

  })

})
