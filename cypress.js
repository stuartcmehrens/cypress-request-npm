const request = require('@cypress/request');

request.get('https://www.semgrep.dev', null, (err, _, body) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log(body);
});