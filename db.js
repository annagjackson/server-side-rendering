var data = require('./github')

module.exports = {
  // getHomeData: getHomeData,
  getRepos:getRepos
}

function getRepos () {
  var filteredRepos = data.repos.map(function (repo) {
    return {
      id: repo.id,
      name: repo.name
    }
  })
  return {
    prop: data.prop,
    repos: filteredRepos
  }
}
