
const connect = require('connect');

const app = connect();

app.listen(4567);

console.log('App is running on http://localhost:4567');

function logger(request, response, next ) {
    console.log(request.method, request.url);
    next();
}

app.use(logger);

// at this point we haven't registered any middleware for responses
function helloWorld(request, response, next)    {
    response.setHeader('Content-Type', 'text-plain');
    response.end('Hello World!');
}

function goodbyeWorld(request, response, next)  {
    response.setHeader('Content-Type', 'text-plain');
    response.end('Goodbye World!');
}

app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

//app.use(helloWorld);