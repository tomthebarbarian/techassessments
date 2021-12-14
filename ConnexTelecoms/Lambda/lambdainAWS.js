const http = require('http');
const xml2js = require('xml2js');

exports.handler = async function (event, context) {
  let phoneNum = event.Details.ContactData.CustomerEndpoint.Address;
  // const phoneUrl = `http://www.telcodata.us/query/queryexchangexml.html?npa=226&nxx=600`;
  const phoneUrl = `http://www.telcodata.us/query/queryexchangexml.html?npa=${phoneNum.substring(2, 5)}&nxx=${phoneNum.substring(5, 8)}`;
  const promise = new Promise(function (resolve, reject) {
    const req = http.request(phoneUrl, res => {

      // console.log(`statusCode: ${res.statusCode}`);
      // console.log('in req')
      res.on('data', d => {
        xml2js.parseString(d, (err, result) => {
          if (err) {
            throw err;
          }

          // log JSON string
          //  console.log(result.root.exchangedata[0].state);
          resolve(result.root.exchangedata[0].state);
        });

        // process.stdout.write(d);
      });

    });

    req.on('error', error => {
      console.error(error);
    });

    req.end();
  });
  // console.log('this is promise', promise.then(req => req))
  return promise.then(res => res);
  // return context.logStreamName

};