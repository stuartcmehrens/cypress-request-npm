const request = require('@cypress/request');

request.get('https://www.google.com', null, (err, response, body) => {
    if (err) {
        console.error(err);
    } else {
        console.log(body);
    }
})