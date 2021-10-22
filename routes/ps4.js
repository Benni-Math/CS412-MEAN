var express = require('express');
var router = express.Router();
var request = require('request')
const fetch = require('node-fetch');
const config = require('./../config');
const API_key = config.API_key;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* Handles path '/ps4' */
router.route('/ps4')
    .get((req, res, next) => {
        res.render('title', {'str': 'Hey now!','body':"Welcome to Eric's Weather API!",'result': "API Response Here..."});
    })

    //Part b: Promise wrapped api call
    .post((req, res, next) => {
        return new Promise(async (resolve, reject) => {
            await request('http://api.openweathermap.org/data/2.5/weather?q=' + req.body.city_name + '&APPID=' + API_key,(err, response, body) => {
                if(!err && response.statusCode == 200){
                    resolve(body);
                }else{
                    reject(response);
                }
            });
        })  // resolve
            .then((result) => {
                //Listens for response from form and receives response in req.body
                 res.render('title', {'str': 'Hey now!','body':"Welcome to Eric's Weather API! *Promise Version",'result': result});
            },
            // reject
            (result) => {
                res.render('title', {'str': 'Hey now!','body':"Error in retrieving API data",'result': result.statusMessage});
            }
        );
    });

/* Handles path '/ps4-async' */
router.route('/ps4-async')
    //Part c: Async wrapped api call
    .post(async (req, res, next) => {
        await request('http://api.openweathermap.org/data/2.5/weather?q=' + req.body.city_name + '&APPID=' + API_key,(err, response, body) => {
            if(!err && response.statusCode == 200){
                res.render('title', {'str': 'Hey now!', 'body': "Welcome to Eric's Weather API! *Async Version", 'result': body});
            }else{
                res.render('title', {'str': 'Hey now!', 'body': "Error in retrieving API data", 'result': response.statusMessage});
            }
        });
    });

/* Handles path '/ps4-callback' */
router.route('/ps4-callback')
    //Part d: Callback wrapped api call
    .post((req, res, next) => {
        request('http://api.openweathermap.org/data/2.5/weather?q=' + req.body.city_name + '&APPID=' + API_key,(err, response, body) => {
            if(!err && response.statusCode == 200){
                res.render('title', {'str': 'Hey now!', 'body': "Welcome to Eric's Weather API! *Callback Version", 'result': body});
                next();
            }else{
                res.render('title', {'str': 'Hey now!', 'body': "Error in retrieving API data", 'result': response.statusMessage});
                next(err)
            }
        });
    });

// //Another Part b method using fetch, fetch version downgraded in package.json
// router.route('/ps4-async')
//     //Part b: Async wrapped api call
//     .post(async (req, res, next) => {
//         try {
//             const body = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + req.body.city_name + '&APPID=' + API_key);
//             res.render('title', {
//                 'str': 'Hey now!',
//                 'body': "Welcome to Eric's Weather API! *Async Version",
//                 'result': body
//             });
//         } catch (e) {
//             res.render('title', {'str': 'Hey now!', 'body': "Error in retrieving API data", 'result': e});
//         }
//     });

module.exports = router;