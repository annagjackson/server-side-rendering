var fs = require("fs")
var path = require("path")

module.exports = {
  // getHomeData: getHomeData,
  getRepos:getRepos
}

var dataPath = path.join(__dirname, "github.json")

function getRepos (callback) {
  fs.readFile (dataPath, "utf8", parseJSON)

  function parseJSON(err, data){
    if(err){
      callback(err)
    } else {
      var object = JSON.parse(data)
      callback(err, object)
    }
  }
}
