let express = require("express");
let router= express.Router({caseSensitive:true});

router.get('/', function (req, res) {
    res.send('Hello World First Express API')
})

module.exports = router;