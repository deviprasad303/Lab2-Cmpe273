var express = require('express');
var path = require('path');
var pathone=path;
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');
require('./routes/passport')(passport);
var multipart=require('connect-multiparty');
var multipartMiddleware=multipart();
var routes = require('./routes/index');
var users = require('./routes/users');
var mongoSessionURL = "mongodb://localhost:27017/sessions";
var expressSessions = require("express-session");
var mongoStore = require("connect-mongo/es5")(expressSessions);
var kafka = require('./routes/kafka/client');
var winston = require('winston');
var fs = require('fs');

var app = express();


var logger = new(winston.Logger)({
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({filename: '../back-end/mylogfile.log'})
    ]
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSessions({
    secret: "CMPE273_passport",
    resave: false,
    //Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, //force to save uninitialized session to db.
    //A session is uninitialized when it is new but not modified.
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 6 * 1000,
    cookie : {
        path : '/',
        httpOnly : false,
        maxAge : null
    },
    store: new mongoStore({
        url: mongoSessionURL,
        ttl:60*60,

    })
}));
app.use(passport.initialize());

app.use('/', routes);
app.use('/users', users);

app.post('/logout', function(req,res) {
    console.log(req.session.user);
    logger.info(req.session.user+" Logout page");
    req.session.destroy();
    console.log('Session Destroyed');
    res.status(200).send();
});

app.post('/login', function(req, res) {

console.log('errht');
    passport.authenticate('login', function(err, user) {
        logger.info("Entry Login page");
        if(err) {
            res.status(500).send();
        }

        if(!user) {
            res.status(401).send();
        }
        else {

            req.session.user = user.results.username;
            console.log(user);
            console.log(req.session.user);
            console.log("session initilized");




            return res.status(201).send({userdata: user.results});
        }
    })(req, res);
});










app.get('/graphs',function(req,res) {


        var output={};
        var output1={};
        var output2={};
        var output3={};
        var books = {};
    var books1 = {};
        var m=[];
var p=0;
        var foo = {};
            var i,x,y,z;
                var lineReader = require('readline').createInterface({
            input: fs.createReadStream(__dirname + '/mylogfile.log')
        });
        lineReader.on('line', function (line) {
            console.log('line'+line.length);
            if(line.length===0)
                res.status(200).send({"results":JSON.stringify(books)});
            else {
                var array = line.split(':');
                // var toWrite = ":";
                if (array) {
                    if (array[2]) {
                        var ter = array[3].concat(array[4]).concat(array[5]);
                        console.log('hi' + array[3].concat(array[4]).concat(array[5]));
                        if (array[2])
                            var user = array[2].split(',');
                        console.log('hi1' + user[2]);
                        x = user[0].substr(1);
                        x = x.split(' ');
                        console.log('hi2' + x[0]);
                        console.log('hi2' + x[2]);
                        y = ter.substr(1).slice(0, -2);
                        if (books[x[0]]) {
                            if (books[x[0]][x[2]]) {
                                books[x[0]][x[2]][Object.keys(books[x[0]][x[2]]).length] = y;
                            }
                            else {
                                output2 = {};
                                output3 = {};

                                output2[0] = y;

                                books[x[0]][x[2]] = output2;
                            }
                        }
                        else {
                            output2 = {};
                            output3 = {};
                            output2[0] = y;
                            output3[x[2]] = output2;
                            books[x[0]] = output3;
                        }
                        console.log('hi3' + foo[x[2]]);

                        //books[x[0]] =foo;
                        console.log('hi4' + JSON.stringify(books));
                        books1 = JSON.stringify(books);
                        // res.status(200).send({"results":JSON.stringify(books)});
                    }
                }
            }
        });
       // console.log(books1);
    //res.setHeader('Content-Type', 'application/json');
    //res.setHeader('Content-Type', 'application/json');
   // res.status(200).send({"results":JSON.stringify(books)});


});

app.get('/getstarfiles/:username',function(req,res){

    //winston.add(winston.transports.Riak, { level: 'warn' });
    //logger.info(req.params.username+" Entry Home page");\\
    console.log(req.params.username);

    kafka.make_request('getstarfiles_topic',{"username":req.params.username}, function(err,results){
        console.log('in result');
        console.log(results);
        if(err) {
            res.status(500).send();
        }
        else{
            res.status(200).send({"results":results});
        }
    });
});


app.get('/downloadfile', function(req, res){

    console.log(req);



    var file = path.join(__dirname, "./uploads/" + req.query.filename);
    //pool.query('INSERT into userAct ( useractions,email) values("Downloaded files:'+ req.query.filename+'","'+req.query.email+'");', function(err, result) {
        // Neat!


    res.download(file);

});


app.post('/newdirectory', function(req, res){

    console.log(req.body.directory);

    var dir = pathone.join(__dirname, "./uploads/" + req.body.directory);

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }


    kafka.make_request('newdirectory_topic',{"username":req.query.email,"dirname":req.body.directory}, function(err,results){
        console.log('in result');
        console.log(results);
        if(err) {
            res.status(500).send();
        }
        else{
            res.status(200).send({"results":results});
        }
    });



    res.end('success');
});




app.post('/files',multipartMiddleware, function(req, res) {
    // Get sent data.

    console.log('In upload files');


    console.log("hi" + req.body, req.files);

    for (var i in req.body, req.files) {
        for (var j in req.files[i]) {
            var name = req.files[i][j].originalFilename;
            var path = req.files[i][j].path;
        }
    }
    console.log(path);
    var email = req.query.email;
    if (req.query.dir) {
        console.log(req.query.dir);

        var res = req.query.dir.split("./.");
        var direct = res[0];
        var email2 = res[1];
    }
    if (req.query.dir) {
        var targetPath = pathone.join(__dirname, "./uploads/" + direct + "/" + name);

    }
    else
        var targetPath = pathone.join(__dirname, "./uploads/" + name);
    //var temppath = path;
    fs.rename(path, targetPath, function (err) {
        if (err) {
            console.log(err);

        }


        if (!req.query.dir) {



            kafka.make_request('uploadfiles_topic',{"username":req.query.email,"filename":name}, function(err,results){
                console.log('in result');
                //console.log(res);
                if(err) {
                    res.status(500).send();
                }
                else{
                    res.status(200).send();
                }
            });

        }
        else {
            kafka.make_request('uploadfiles_topic',{"username":email2,"filename":direct+'/'+name}, function(err,results){
                console.log('in result');
                console.log(results);
                if(err) {
                    res.status(500).send();
                }

            });
        }
    });

});
        app.post('/sharefile', function(req, res) {

            console.log(req.body.directory);


            // var queryString = 'SELECT * from users WHERE email="' + req.query.sharee + '";';

            if (req.body.directory !== 'yes'){

                kafka.make_request('sharefiles_topic', {
                    "username": req.query.sharee,
                    "isdir": req.body.directory,
                    "filename": req.body.filename
                }, function (err, results) {
                    console.log('in result');
                    console.log(results);
                    if (err) {
                        res.status(500).send();
                    }
                    else {
                        res.status(200).send({"results": results});
                    }
                });
        }
else {

                var testFolder = pathone.join(__dirname, "./uploads/" + req.body.filename);
                if (fs.existsSync(testFolder)) {
                    kafka.make_request('sharefiles_topic', {
                        "username": req.query.sharee,
                        "isdir": req.body.directory,
                        "filename": req.body.filename
                    }, function (err, results) {


                        if (err) {
                            res.status(500).send();
                        }

                    });

                    console.log(testFolder);
                    fs.readdir(testFolder, (err, files) => {
                        files.forEach(file => {
                            kafka.make_request('sharefiles_topic', {
                                "username": req.query.sharee,
                                "isdir":'no',
                                "filename": req.body.filename + "/" + file
                            }, function (err, results) {
                                console.log('in result');
                                console.log(results);
                                if (err) {
                                    res.status(500).send();
                                }

                            });


                        });
                    });
                }
            }

        });





// var files=req.R;
        /* var email=req.query.email;
         if(req.query.dir) {
         console.log(req.query.dir);

         var res = req.query.dir.split("./.");
         var direct=res[0];
         var email2=res[1];
         }
         var uploadDate1=new Date();
         var uploadDate = uploadDate1.getFullYear() + "-" + (uploadDate1.getMonth() + 1) + "-" + uploadDate1.getDate() + "-" + uploadDate1.getHours() + "H-" +  uploadDate1.getMinutes() + "M";
         for(var i in files) {

         console.log(files[0]);


         var path = files[i];

         for (var key in path) {
         var path123 = path[key].path;

         var name = path[key].name;
         var tempPath = path[key].path;

         if (req.query.dir) {
         var targetPath = pathone.join(__dirname, "./uploads/" + direct + "/" + name);

         }
         else
         var targetPath = pathone.join(__dirname, "./uploads/" + name);

         // var savepath = "/uploads/" + uploadDate +  path[key].path;
         fs.rename(tempPath, targetPath, function (err) {
         if (err) {
         console.log(err);

         }


         });

         if (!req.query.dir) {
         /!*  pool.query('INSERT into files ( filename,email) values("' + name + '","' + req.query.email + '");', function (err, result) {
         // Neat!
         if (err) throw err;

         });



           kafka.make_request('uploadfiles_topic',{"username":req.query.email,"filename":name}, function(err,results){
         console.log('in result');
         console.log(results);
         if(err) {
         res.status(500).send();
         }
         else{
         res.status(200).send({"results":results});
         }
         });

         }
         else {
         kafka.make_request('uploadfiles_topic',{"username":req.query.email,"filename":name}, function(err,results){
         console.log('in result');
         console.log(results);
         if(err) {
         res.status(500).send();
         }
         else{
         res.status(200).send({"results":results});
         }
         });
         }
         }
         }

         var obj = {};

         */

app.get('/getgroups', function (req, res) {

    //winston.add(winston.transports.Riak, { level: 'warn' });
    //   logger.info(req.params.username + " Entry Home page");

    kafka.make_request('getgroups_topic', {"username": req.query.sharee}, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            res.status(500).send();
        }
        else {
            res.status(200).send({"results": results});
        }
    });
});

        //  res.end('Success');
app.get('/getgroupusers', function (req, res) {

    //winston.add(winston.transports.Riak, { level: 'warn' });
 //   logger.info(req.params.username + " Entry Home page");

    kafka.make_request('getgroupusers_topic', {"username": req.query.groupname}, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            res.status(500).send();
        }
        else {
            res.status(200).send({"results": results});
        }
    });
});

app.get('/getgroupfiles', function (req, res) {

    //winston.add(winston.transports.Riak, { level: 'warn' });
   // logger.info(req.params.username + " Entry Home page");

    kafka.make_request('getgroupfiles_topic', {"username": req.query.groupname}, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            res.status(500).send();
        }
        else {
            res.status(200).send({"results": results});
        }
    });
});


app.post('/groupsadduser', function (req, res) {

    //winston.add(winston.transports.Riak, { level: 'warn' });
  //  logger.info(req.params.username + " Entry Home page");

    kafka.make_request('addgroupusers_topic', {"groupname": req.body.groupname,"username":req.query.sharee}, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            res.status(500).send();
        }
        else {
            res.status(200).send({"results": results});
        }
    });
});


app.post('/newGroup', function (req, res) {

    //winston.add(winston.transports.Riak, { level: 'warn' });
    //  logger.info(req.params.username + " Entry Home page");

    kafka.make_request('newgroup_topic', {"groupname": req.body.groupname,"username":req.query.email}, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            res.status(500).send();
        }
        else {
            res.status(200).send({"results": results});
        }
    });
});



app.post('/groupsaddfile',multipartMiddleware, function (req, res) {

    //winston.add(winston.transports.Riak, { level: 'warn' });
   // logger.info(req.params.username + " Entry Home page");
console.log(req.body, req.files);
    for (var i in req.body, req.files) {
        for (var j in req.files[i]) {
            var name = req.files[i][j].originalFilename;
            var path = req.files[i][j].path;
        }
    }

    console.log(path);
    console.log(name);

    var targetPath = pathone.join(__dirname, "./uploads/groups/" + name);
    //var temppath = path;
    fs.rename(path, targetPath, function (err) {
        if (err) {
            console.log(err);

        }
    });

        kafka.make_request('addgroupfiles_topic', {"groupname": req.query.groupname,"filename":name}, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            res.status(500).send();
        }
        else {
            res.status(200).send({"results": results});
        }
    });
});






    app.get('/getuserfiles/:username', function (req, res) {

        //winston.add(winston.transports.Riak, { level: 'warn' });
        logger.info(req.params.username + " Entry Home page");

        kafka.make_request('getfiles_topic', {"username": req.params.username}, function (err, results) {
            console.log('in result');
            console.log(results);
            if (err) {
                res.status(500).send();
            }
            else {
                res.status(200).send({"results": results});
            }
        });
    });

    app.post('/unstarfile/:filename', function (req, res) {

        //winston.add(winston.transports.Riak, { level: 'warn' });
        //  logger.info(req.params.username+" Entry Home page");
        logger.info(req.session.user + " Entry host12 page");
        console.log('hi12');
        console.log(req.session.user);
        kafka.make_request('unstarfiles_topic', {
            "filename": req.params.filename,
            "username": req.body.username
        }, function (err, results) {
            console.log('in result');
            console.log(results);
            if (err) {
                res.status(500).send();
            }
            else {
                res.status(200).send();
            }
        });
    });


    app.post('/starfile/:filename', function (req, res) {

        //winston.add(winston.transports.Riak, { level: 'warn' });
        //  logger.info(req.params.username+" Entry Home page");
        logger.info(req.session.user + " Entry host12 page");
        console.log('hi12');
        console.log(req.session.user);
        kafka.make_request('starfiles_topic', {
            "filename": req.params.filename,
            "username": req.body.username
        }, function (err, results) {
            console.log('in result');
            console.log(results);
            if (err) {
                res.status(500).send();
            }
            else {
                res.status(200).send();
            }
        });
    });

    app.get('/host1', function (req, res) {

        //winston.add(winston.transports.Riak, { level: 'warn' });

        logger.info(req.session.user + " Entry host1 page");
        res.status(200).send({"results": 'hi'});
        /* kafka.make_request('getfiles_topic',{"username":req.params.username}, function(err,results){
         console.log('in result');
         console.log(results);
         if(err) {
         res.status(500).send();
         }
         else{
         res.status(200).send({"results":results});
         }
         });*/
    });

    app.get('/host2', function (req, res) {

        //winston.add(winston.transports.Riak, { level: 'warn' });
        logger.info(req.session.user + " Entry host2 page");
        res.status(200).send({"results": 'hi'});
        /* kafka.make_request('getfiles_topic',{"username":req.params.username}, function(err,results){
         console.log('in result');
         console.log(results);
         if(err) {
         res.status(500).send();
         }
         else{
         res.status(200).send({"results":results});
         }
         });*/
    });
    app.get('/host3', function (req, res) {

        //winston.add(winston.transports.Riak, { level: 'warn' });
        logger.info(req.session.user + "Entry host3 page");
        res.status(200).send({"results": 'hi'});

        /* kafka.make_request('getfiles_topic',{"username":req.params.username}, function(err,results){
         console.log('in result');
         console.log(results);
         if(err) {
         res.status(500).send();
         }
         else{
         res.status(200).send({"results":results});
         }
         });*/
    });


    app.get('/updatelog/:username', function (req, res) {

        //winston.add(winston.transports.Riak, { level: 'warn' });
        logger.info(req.params.username + " Exit Home page");


    });


    app.post('/signup', function (req, res) {


        var myobj = {
            "username": req.body.username,
            "password": req.body.password,
            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "files": [],
            "dir":[]
        };
        kafka.make_request('signup_topic', {"data": myobj}, function (err, results) {
            console.log('in result');
            console.log(results);
            if (err) {
                res.status(500).send();
            }
            else {
                res.status(200).send({"results": results});

                //  logger.log( req.body.username+" entry Signup page");
            }
        });
    });







module.exports = app;
