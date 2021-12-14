import http from 'http';
import xml2js from 'xml2js';

const getProvince = () => {
  const egObj = {
    "Details": {
      "ContactData": {
        "Attributes": {},
        "Channel": "VOICE",
        "ContactId": "4a573372-1f28-4e26-b97b-XXXXXXXXXXX",
        "CustomerEndpoint": {
          "Address": "+12266004912",
          "Type": "TELEPHONE_NUMBER"
        },
        "InitialContactId": "4a573372-1f28-4e26-b97b-XXXXXXXXXXX",
        "InitiationMethod": "INBOUND | OUTBOUND | TRANSFER | CALLBACK",
        "InstanceARN": "arn:aws:connect:aws-region:1234567890:instance/c8c0e68d-2200-4265-82c0-XXXXXXXXXX",
        "PreviousContactId": "4a573372-1f28-4e26-b97b-XXXXXXXXXXX",
        "Queue": {
          "ARN": "arn:aws:connect:eu-west-2:111111111111:instance/cccccccc-bbbb-dddd-eeee-ffffffffffff/queue/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
          "Name": "PasswordReset"
        },
        "SystemEndpoint": {
          "Address": "+1234567890",
          "Type": "TELEPHONE_NUMBER"
        }
      },
      "Parameters": {
        "sentAttributeKey": "sentAttributeValue"
      }
    },
    "Name": "ContactFlowEvent"
  };

  const phoneNum = egObj.Details.ContactData.CustomerEndpoint.Address;
  
  // const phoneUrl = `http://www.telcodata.us/query/queryexchangexml.html?npa=${phoneNum.substring(2,5)}&nxx=${phoneNum.substring(5,8)}`;
  // const phoneUrl = `http://www.telcodata.us/query/queryexchangexml.html?npa=226&nxx=600`;
  const phoneUrl = `http://example.com`;
  
  const req = http.request(phoneUrl, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
      // xml2js.parseString(d, (err, result) => {
      //   if (err) {
      //     throw err;
      //   }

      //   // log JSON string
      //   console.log(result.root.exchangedata[0].state);
      //   return(result.root.exchangedata[0].state)
      // });

      process.stdout.write(d); 
    });

  });

  req.on('error', error => {
    console.error(error);
  });

  req.end();
};
export default getProvince;
// let myRequest = fetch('http://www.telcodata.us/query/queryexchangexml.html?npa=226&nxx=600');
// 'http://www.telcodata.us/query/queryexchangexml.html?npa=628&nxx=219';