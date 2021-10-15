const colors = require("colors/safe");
const port = 5000;
const apiV1 = require('./routes/api-router');
const apiServer = new api_server.default({ 
    routes: [
        { path: '/v1', subApplication: apiV1 }
    ]
});

apiServer
    .start(port)
    .then(() => {
        console.log(colors.green('Server started on port ') + colors.yellow(port));
    })
    .catch((error) => {
        console.log(colors.red('Unexpected error catch in app.js : ', error));
    });