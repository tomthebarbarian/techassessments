const http = require('http');
const xml2js = require('xml2js');

exports.handler = async function (event, context) {
	const phoneUrl = `http://www.telcodata.us/query/queryexchangexml.html?npa=226&nxx=600`;
	const promise = new Promise(function (resolve, reject) {
	const req = http.request(phoneUrl, res => {

	console.log(`statusCode: ${res.statusCode}`);
	console.log('in req')
	res.on('data', d => {
		xml2js.parseString(d, (err, result) => {
			if (err) {
				throw err;
			}

			// log JSON string
			console.log(result.root.exchangedata[0].state);
			return (result.root.exchangedata[0].state)
		});

		// process.stdout.write(d); 
	});

});

req.on('error', error => {
	console.error(error);
});

		req.end();
	})
	return promise.then(req => req)
	// return context.logStreamName

}