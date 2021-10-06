var express = require('express');
var router = express.Router();

//The diff types of routers in this file is just syntax differences

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
/* Handles path '/ps3' */
router.route('/ps3')
    //Question b
    .get((req, res, next) => {
        res.render('title', {'str': 'Hey now!'});
    })
    //Question c
    .post((req, res, next) => {
        res.render('title2',{'str': req.body.str, 'str_length': req.body.str.length});
    })
/* Handles path '/names/:fname' */
router.route('/names/:fname')
    //Question d
    .get((req, res, next) => {
        res.render('title3',{'Received': req.params.fname})
    })

module.exports = router;