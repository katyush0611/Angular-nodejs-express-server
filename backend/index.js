var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var cors = require('cors');
var ObjectId = mongodb.ObjectId

var app = express();
app.use(bodyParser.json())
app.use(cors());

var connection = MongoClient.connect(
	'mongodb://localhost:27017',
	{ usernameUrlParser: true });
var db;

app.get('/log', cors(), (req, res) => {
	db.collection('log').find().toArray()
	.then(all => {
		res.send(all)
	})
})

app.post('/add', cors(), (req, res) => {
	var newMsg = req.body;
	console.log(newMsg);
	db.collection('log').insert(
		{sender: newMsg.sender, body: newMsg.body, date: newMsg.date}
	)
	res.send(newMsg);
})

app.get('/delete/:id', cors(), (req, res) => {
	console.log(req.params.id);
	db.collection('log').remove(
		{_id: new ObjectId(req.params.id)}
	)
	.then(() => {
		res.send(200)
	})
})

connection.then(connection => {
	db = connection.db('messages');
	app.set('db', db);	
	app.listen('3000', () => {
		console.log('ok');
	})
}).catch(err => console.log(err))