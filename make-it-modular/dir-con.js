var readLines = require("./dir-mod.js");

var directory = process.argv[2];

var fileExt = process.argv[3];

readLines(directory, fileExt, function(err, file){

  if (err) console.log(err);

  else console.log(file);

});
