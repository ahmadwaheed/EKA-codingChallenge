var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var loginInfo = require('../database/loginInfo.js');
var profileInfo = require('../database/profileInfo.js');
var { retrieveLastEntry } = require('./helpers.js');
var port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


app.post('/login/form1', (req, res) => {
  var newEntry = new loginInfo(req.body);
  newEntry.save(null, {method: 'insert'})
    .then((success) => {
      res.status(201).send('success');
    })
    .catch((error) => {
      res.status(500).send('error');
    });
});

app.post('/profile/form2', (req, res) => {
  var fetchLastUserNameRow = retrieveLastEntry(loginInfo);

  fetchLastUserNameRow.then((result) => {
    var dataObject = Object.assign({}, req.body, {userName_id: result.attributes.id});
    var newEntry = new profileInfo(dataObject);
    newEntry.save(null, {method: 'insert'})
      .then((success) => {
        console.log('following data was saved', success);
        res.status(201).send('success');
      })
      .catch((error) => {
        console.log('following error has occurd', error);
        res.status(500).send('error');
      });
  })
  .catch((error) => {
    res.status(500);
  })
});

app.post('/profile/form3', (req, res) => {
  var fetchLastUserNameRow = retrieveLastEntry(loginInfo);

  fetchLastUserNameRow.then((result) => {
    profileInfo.where({userName_id: result.attributes.id})
      .save(req.body, {method: 'update'})
        .then((success) => {
          res.status(201).send('success');
        })
        .catch((error) => {
          res.send(500).send('error');
        });
  })
  .catch((error) => {
    res.status(500);
  });
}); 


app.listen(port);