var db = require('./db')


module.exports = {
  home: home,
  detail: detail
}

function home (req, res) {
  var data = db.getRepos()
  data.showList = req.query.showlist
  res.render('home', data)
}

function detail () {
  var data = db.getRepos()
  data.showList = req.query.showlist
  res.render('detail', data)
}
