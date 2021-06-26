const express = require('express');
const router = express.Router();

router.get('/', (_, response) => {
    response.status(200).send('Hello World');
});



module.exports = router;