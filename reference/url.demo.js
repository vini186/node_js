const url = require('url');


const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//host (root domain)

console.log(myUrl.host);
//hostname

console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// serialized query

console.log(myUrl.search);

//params object
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`));
