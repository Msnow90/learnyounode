var fs = require("fs");

var readFileStuff = function(directory, fileExt, callback) { 

fileExt = "." + fileExt;

fs.readdir(directory, function(err, listOfFiles) {

  if (err)return callback(err);

  listOfFiles.map(function(file) {

    if (file.indexOf(fileExt) != -1) callback(null, file);

  })

})


};

module.exports = readFileStuff;
