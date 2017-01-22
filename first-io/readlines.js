var fs = require("fs");

var pathOfFile = process.argv[2];

function readLines(path) {

  var totalLines = 0;
	
  var rs = fs.readFileSync(path).toString();

  while(rs.indexOf("\n") != -1){

    totalLines++;
    rs = rs.replace("\n", "");

  }
  return totalLines
}

console.log(readLines(pathOfFile));
