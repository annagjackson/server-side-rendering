var db = require('./db')


module.exports = {
  home: home,
  detail: detail,
  get: get,
  sayHello: sayHello
}

function home (req, res) {
  db.getRepos(function (err, data){
    data.showList = req.query.showlist
    res.render('home', data)
  })
}

function detail (req, res) {

  // Get the parameter ID.
  var id = Number(req.params.id)

  // Get the data from the database.
  db.getRepos(function (err, data){
    //handle error
    if(err) {
      return res.status(500).send(err.message)
    }
    // Find repo that matches ID.
    var repo = data.repos.find(
      function (repo){
        return repo.id === id
      }
    )

    // Show details of repo.
    res.render('detail', repo)
  })

}

function get (req, res) {
  var data = {
    greetings: 'Kia ora',
    country: 'Aotearoa'
  }
  res.render('form', data)
}



function sayHello (req, res){
  console.log(req.body)
  var data = req.body
  res.render('form', data)
}
