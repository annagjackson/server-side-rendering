var test = require('tape')
var path = require('path')

//var app = require('../db.js')

var app = require('../db.js')

// test('expect return error', function (t){
//   //arrange
// var expectedData = path.join(__dirname, "github.json")

  //action
//   function testCallbackBad (err, data) {
//     t.ok(err, 'there is an error')
//     t.notOk(data, 'data has no value')
//     t.end()
//   }
//   //readData(path.join(__dirname, "github.json"))
//   readData('../a/path/doesntexist', testCallbackBad)
//   //assert
// })

var expectedData = path.join(__dirname, "github.json")

request(app)
    .get('/detail')
    .end(function (err, res) {
      // Test fails if there's an error
      t.error(err)
      t.equal(res.text, expectedData)
      t.end()
    })
