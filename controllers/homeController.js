const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("index", {name: "Pesho"});
})

module.exports = router;