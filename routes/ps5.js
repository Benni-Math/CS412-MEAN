var express = require('express');
var router = express.Router();
var request = require('request')
const fetch = require('node-fetch');
const config = require('./../config');
const redis = require('redis');
const client = redis.createClient();
const API_key = config.API_key;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.route('/ps5')
    .get((req, res, next) => {
        res.render('title', {'str': 'Hey there!','body':"Welcome to Eric's Weather API!",'result': "API Response Here..."});
    })

/* Handles path '/ps5' */
router.route('/ps5-cache')
    //CACHE STEP
    .post( (req, res, next) => {
        const name = req.body.city_name;
        console.log(name)
        client.exists(name, (err, match) => {
            if(err){
                console.log("ERROR in redis client")
            }

            if(match){
                console.log("Cache Match")
                client.get(name, (err, response) => {
                    console.table(response);
                    let jsonResponse = {
                        city: name,
                        response: response,
                        fromCache: true,
                        note: ' ***Successful cache retrieval of: ' + name
                    }
                    res.send(jsonResponse)
                })
            }else {
                console.log("Cache NOT matched")
                request('http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=' + API_key, (err, response, body) => {
                    if (!err && response.statusCode == 200) {
                        client.set(name, body, 'EX', 1500, (err, response) => { //name = key, reversedName = value
                            console.table(response);
                            let jsonResponse = {
                                city: name,
                                body: body,
                                fromCache: false,
                                note: ' ***Successful cache of: ' + name
                            }
                            res.send(jsonResponse)
                        })
                    } else {
                        res.render('title', {
                            'str': 'Hey there!',
                            'body': "Error in retrieving API data",
                            'result': response.statusMessage
                        });
                    }
                });
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