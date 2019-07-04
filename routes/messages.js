const express = require('express');
const router = express.Router();

router.get('/hello/:value?', function (req, res) {
    if(req.params.value)
        return res.send(`Hello ${req.params.value}`);
    res.send(`Hello World`);
});

router.get('/bye/:value?', function (req, res) {
    if(req.params.value)
        return res.send(`Bye ${req.params.value}`);
    res.send(`Bye World`);
});

module.exports = router;