var Datastore = require('nedb');
var db = new Datastore({ filename: 'items' });
db.loadDatabase();

var sendJSONresponse = function (res, status, content) {
	res.status(status);

	for (var k in content) {
		delete content[k]['secret'];
	}
	res.json(content);
};

module.exports.getAll = (req, res) => {
	db.find({}, (err, docs) => {
		
		sendJSONresponse(res, 200, docs)
	})
}

module.exports.getOne = (req, res) => {
	db.find({
		_id : req.params.id
	}, (err, docs) => {
		sendJSONresponse(res, 200, docs)
	});
}

module.exports.addOne = (req, res) => {

	db.insert({
		name: req.body.name,
		isComplete: req.body.isComplete,
		secret: req.body.secret
	}, (err, docs) => {
		sendJSONresponse(res, 200, docs)
	});
}

module.exports.updateOne = (req, res) => {
	db.update({ _id: req.params.id }, {
		name: req.body.name,
		isComplete: req.body.isComplete,
		secret: req.body.secret
	}, (err, docs) => {
		sendJSONresponse(res, 200, docs)
	})
}

module.exports.deleteOne = (req, res) => {
	db.remove({ _id: req.params.id }, (err, docs) => {
		sendJSONresponse(res, 200, docs)
	})
}