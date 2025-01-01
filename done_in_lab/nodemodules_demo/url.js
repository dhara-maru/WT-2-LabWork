const { URL } = require('url');

const myURL = new URL('https://example.com/path?name=Dhara&age=20');
console.log(myURL.hostname);
console.log(myURL.pathname);
console.log(myURL.searchParams.get('name'));
myURL.searchParams.append('city', 'Morbi');
console.log(myURL.toString());
