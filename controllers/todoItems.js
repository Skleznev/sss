var Datastore = require('nedb');
var db = new Datastore({ filename: 'users' });
db.loadDatabase();


var sendJSONresponse = function (res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.getAll = (req, res) => {
	db.find({}, (err, docs) => {
		sendJSONresponse(res, 200, docs)
	})
}

module.exports.getOne = (req, res) => {
	db.findOne({
		_id : req.params.id
	}, (err, docs) => {
		sendJSONresponse(res, 200, docs)
	});
}

module.exports.addOne = (req, res) => {

	db.insert({
		_id: getNextSequence("id"),
		name: req.body.name,
		isComplete: req.body.isComplete,
		secret: req.body.secret
	}, (err, docs) => {
		sendJSONresponse(res, 200, docs)
	});
}

module.exports.updateOne = (req, res) => {
	sendJSONresponse(res, 200, 'Update One')
}

module.exports.deleteOne = (req, res) => {
	sendJSONresponse(res, 200, 'Delete One')
}