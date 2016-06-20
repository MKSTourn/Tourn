const express = require('express');
const router = express.Router();

module.exports = router;

router.use(express.static(`${__dirname}/../../client/public/`));
