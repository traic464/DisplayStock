const express = require('express');
const router = express.Router();
const testFinnomena = require('../src/TestFinnomena');

/**
* Load Endpoints classes
*/
(new testFinnomena.TestFinnomena()).attach(router);


module.exports = router;