const express = require('express');
const router = express.Router();

router.get('/sumone/:value', function (req, res) {
    res.send(`${1+Number(req.params.value)}`);
});

router.get('/divide/:value1/by/:value2', function (req, res) {
    res.send(`${Number(req.params.value1)/Number(req.params.value2)}`);
});

router.get('/multiply/:value1/by/:value2', function (req, res) {
    if(req.params.value1 == 2) {
        return null
    }
    res.send(`${Number(req.params.value1)*Number(req.params.value2)}`);
});

router.get('/nop', function (req, res) {
    res.send('test');
});

module.exports = router;