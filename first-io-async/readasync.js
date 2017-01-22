var fs = require("fs");

var pathOfFile = process.argv[2];

function readLines(path) {

  var totalLines = 0;
	
  var rs = fs.readFile(path, function(err, data) { 
    
    var data = data.toString();

    while(data.indexOf("\n") != -1){

      totalLines++;
      data = data.replace("\n", "");

    }

    console.log(totalLines);
  });
}

readLines(pathOfFile);
