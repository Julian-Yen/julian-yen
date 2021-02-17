const arrange = document.getElementById(".arrange");

var OAuth = require('oauth')
// `npm install oauth` to satisfy
// website: https://github.com/ciaranj/node-oauth
// `npm install oauth` to satisfy
// website: https://github.com/ciaranj/node-oauth

var KEY = "f78ae643090942acb1d2f1acdbee"
var SECRET = "a6778b29349c4c0688737e94335146ce"

var oauth = new OAuth.OAuth(
	'http://api.thenounproject.com',
	'http://api.thenounproject.com',
	KEY,
	SECRET,
	'1.0',
	null,
	'HMAC-SHA1'
)

var newIcon = oauth.get(
	'http://api.thenounproject.com/icon/6324',
	KEY,
	SECRET,
	function (e, data, res){
		if (e) console.error(e)
		console.log(require('util').inspect(data))
	}
)


//arrange.appendChild(newIcon);

