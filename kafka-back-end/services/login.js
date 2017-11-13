var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";
var url2 = "mongodb://localhost:27017/test";
var mongo=require('./mongo');

function handle_request(msg, callback){

    var res = {};
    console.log("In handle request1111:"+ JSON.stringify(msg));
    /*MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection('login').findOne({"username":msg.username}, function(err, mongores) {
            if (err) throw err;
            console.log("1 document found"  + mongores);
            db.close();
            callback(null, mongores);
        });
    });
*/

    mongo.connectPool(url, function(db){
        db.collection('login').findOne({"username":msg.username}, function(err, mongores) {
            if (err) throw err;
            console.log("1 document found"  + mongores);
           // db.close();
            mongo.release(db);
            callback(null, mongores);
        });
    });
    //callback(null, res);
}


function handle_uploadfiles(msg, callback){

    var res = {};
    console.log("In handle request1145:"+ JSON.stringify(msg));
    MongoClient.connect(url, function(err, db) {
        console.log( msg.username);
        db.collection('login').update({"username": msg.username}, {$push: {'files': { filename: msg.filename,isstar:0}}});
        db.collection('login').update({"username": msg.username}, {$push: {'userAct':  'Uploaded a file'}});


    });
    callback(null, 'success');
}


function handle_sharefiles(msg, callback){

    var res = {};
    console.log("In handle request1145:"+ JSON.stringify(msg));
    MongoClient.connect(url, function(err, db) {
        console.log( msg.username);
        if(msg.isdir==='yes')
        {
            db.collection('login').update({"username": msg.username}, {$push: {'dir': { dirname: msg.filename,isstar:0}}});
            db.collection('login').update({"username": msg.username}, {$push: {'userAct':  'Shared a directory'}});
        }
        else {
            db.collection('login').update({"username": msg.username}, {
                $push: {
                    'files': {
                        filename: msg.filename,
                        isstar: 0
                    }
                }
            });
            db.collection('login').update({"username": msg.username}, {$push: {'userAct': 'Shared a file'}});
        }  });
    callback(null, 'success');
}

function handle_unstar(msg, callback){

    var res = {};
    console.log("In handle request1111:"+ JSON.stringify(msg));

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log(msg.username);
        db.collection('login').findOne({"username":msg.username}, function(err, mongores) {
            i=0;
            if (err) throw err;

for(var l in mongores.files) {
    console.log("hi"+ JSON.parse(mongores.files[l].isstar));
    console.log("hi"+ mongores.files[l].filename);
    console.log("hi"+l);
    var isstar=JSON.parse(mongores.files[l].isstar);
    if(mongores.files[l].filename===msg.filename)
        var dev=mongores.files[l].isstar;
        if(mongores.files[l].isstar===1) {

            console.log("hi1234"+mongores.files[l].isstar);
            console.log("kj"+l);
            if (l == 0) {
                console.log('welcome'+msg.username);
                db.collection('login').update({"username": msg.username}, {'$set': {"files.0.isstar": 0}});
                console.log('welcomewer');
            }
            else if (l === 1)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.1.isstar": 0}});
            else if (l === 2)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.2.isstar": 0}});
            else if (l === 3)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.3.isstar": 0}});
            else if (l === 4)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.4.isstar": 0}});
            else if (l === 5)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.5.isstar": 0}});
            else if (l === 6)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.6.isstar": 0}});
            else if (l === 7)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.7.isstar": 0}});
            else if (l === 8)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.8.isstar": 0}});
            else if (l === 9)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.9.isstar": 0}});
            else if (l === 10)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.10.isstar": 0}});
            else if (l === 11)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.11.isstar": 0}});
            i++;
            callback(null, mongores);

        }
        console.log("ghf"+dev);
if(dev==0)        {
            console.log("hi1234"+mongores.files[l].isstar);
            if (l == 0) {
                console.log('welcome2');
                db.collection('login').update({"username": msg.username}, {'$set': {"files.0.isstar": 1}});
                console.log('welcome234');
            }
            else if (l === 1)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.1.isstar": 1}});
            else if (l === 2)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.2.isstar": 1}});
            else if (l === 3)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.3.isstar": 1}});
            else if (l === 4)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.4.isstar": 1}});
            else if (l === 5)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.5.isstar": 1}});
            else if (l === 6)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.6.isstar": 1}});
            else if (l === 7)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.7.isstar": 1}});
            else if (l === 8)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.8.isstar": 1}});
            else if (l === 9)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.9.isstar": 1}});
            else if (l === 10)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.10.isstar":1}});
            else if (l === 11)
                db.collection('login').update({"username": msg.username}, {'$set': {"files.11.isstar": 0}});
            i++;
    db.close();
    callback(null, mongores);

        }


}    });
    });
    //callback(null, res);
}





/*
function handle_star(msg, callback){

    var res = {};
    console.log("In handle request1111:"+ JSON.stringify(msg));

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log(msg.username);
        db.collection('login').findOne({"username":msg.username}, function(err, mongores) {
            i=0;
            if (err) throw err;

            for(var l in mongores.files) {

                console.log(l);
                if(mongores.files[l].filename===msg.filename)
                    if(i===0)
                        db.collection('login').update({"username": msg.username}, {'$set': {"files.0.isstar": 1}});
                    else if(i===1)
                        db.collection('login').update({"username": msg.username}, {'$set': {"files.1.isstar": 1}});
                    else if(i===2)
                        db.collection('login').update({"username": msg.username}, {'$set': {"files.2.isstar": 1}});
                    else if(i===3)
                        db.collection('login').update({"username": msg.username}, {'$set': {"files.3.isstar": 1}});
                    else if(i===4)
                        db.collection('login').update({"username": msg.username}, {'$set': {"files.4.isstar": 1}});
                    else if(i===5)
                        db.collection('login').update({"username": msg.username}, {'$set': {"files.5.isstar": 1}});
                    else if(i===6)
                        db.collection('login').update({"username": msg.username}, {'$set': {"files.6.isstar": 1}});
                    else if(i===7)
                        db.collection('login').update({"username": msg.username}, {'$set': {"files.7.isstar": 1}});
                    else if(i===8)
                        db.collection('login').update({"username": msg.username}, {'$set': {"files.8.isstar": 1}});
                    else if(i===9)
                        db.collection('login').update({"username": msg.username}, {'$set': {"files.9.isstar": 1}});
                    else if(i===10)
                        db.collection('login').update({"username": msg.username}, {'$set': {"files.10.isstar": 1}});
                    else if(i===11)
                        db.collection('login').update({"username": msg.username}, {'$set': {"files.11.isstar": 1}});
                i++;

                db.close();
                callback(null, mongores);
            }    });
    });
    //callback(null, res);
}


*/


function handle_signup(msg, callback){
    var res = {};
    console.log("in handle_signup");
    console.log(msg.data);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("login").insertOne(msg.data, function(err, mongores) {
            if (err) throw err;
            console.log("1 document inserted"  + mongores);
            db.close();
            callback(null, mongores);
        });
    });
    // return res.status(200).json({data:myobj});


}

function handle_newdirectory(msg, callback) {
    var res = {};
    console.log("in handle_newdirectory");
    console.log(msg.username);
    MongoClient.connect(url2, function (err, db) {
        if (err) throw err;
        db.collection('login').update({"username": msg.username}, {$push: {'userAct':  'Created new directory'}});
        db.collection('login').update({"username": msg.username}, {$push: {'dir': { dirname: msg.dirname}}});
            db.close();
            callback(null, 'success');

    });
}


function handle_getfiles(msg, callback) {
    var res = {};
    console.log("in handle_getfiles");
    console.log(msg.username);
    MongoClient.connect(url2, function (err, db) {
        if (err) throw err;
        db.collection("login").findOne({"username": msg.username}, function (err, mongores) {
            if (err) throw err;
            else {
                if(mongores)
                console.log("1 document found" + mongores);
            }
            db.close();
            callback(null, mongores);
        });
    });
}


function handle_getstarfiles(msg, callback) {
    var res = {};
    console.log("in handle_getstarfiles");
    console.log(msg.username);
    MongoClient.connect(url2, function (err, db) {
        if (err) throw err;
        db.collection("login").findOne({"username": msg.username}, function (err, mongores) {
            if (err) throw err;
            else {
                if(mongores)
                    console.log("1 document found" + mongores);
            }
            db.close();
            callback(null, mongores);
        });
    });
}



function handle_getgroups(msg, callback) {
    var res = {};
    console.log("in handle_getgroups");
    console.log(msg.username);
    MongoClient.connect(url2, function (err, db) {
        if (err) throw err;
        db.collection("login").findOne({"username": msg.username}, function (err, mongores) {
            if (err) throw err;
            else {
                if(mongores)
                    console.log("1 document found" + mongores);
            }
            db.close();
            callback(null, mongores);
        });
    });
}

function handle_getgroups(msg, callback) {
    var res = {};
    console.log("in handle_getgroups");
    console.log(msg.username);
    MongoClient.connect(url2, function (err, db) {
        if (err) throw err;
        db.collection("login").findOne({"username": msg.username}, function (err, mongores) {
            if (err) throw err;
            else {
                if(mongores)
                    console.log("1 document found" + mongores);
            }
            db.close();
            callback(null, mongores);
        });
    });
}


function handle_getgroupusers(msg, callback) {
    var res = {};
    console.log("in handle_getgroups");
    console.log(msg.username);
    MongoClient.connect(url2, function (err, db) {
        if (err) throw err;
        db.collection("groups").findOne({"groupname": msg.username}, function (err, mongores) {
            if (err) throw err;
            else {
                if(mongores)
                    console.log("1 document found" + mongores);
            }
            db.close();
            callback(null, mongores);
        });
    });
}


function handle_newgroup(msg, callback) {
    var res = {};
    console.log("in handle_newgroup");
    console.log(msg.data);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.collection('groups').insert({"groupname": msg.groupname, 'users': [msg.username], 'files': [], "dir": []});
        db.collection('login').update({"username": msg.username}, {$push: {'groups': msg.groupname}});

        if (err) throw err;
        console.log("1 document updated" + 'success');
        db.close();
        // callback(null, mongores);

    });
    callback(null, 'success');
}


function handle_addgroupusers(msg, callback){
    var res = {};
    console.log("in handle_signup");
    console.log(msg.data);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection('groups').update({"groupname": msg.groupname}, {$push: {'users': msg.username}});
        db.collection('login').update({"username": msg.username}, {$push: {'groups': msg.groupname}});

            if (err) throw err;
            console.log("1 document updated"  + 'success');
            db.close();
           // callback(null, mongores);

    });
    // return res.status(200).json({data:myobj});

    callback(null, 'success');
}

function handle_getuserActivity(msg, callback){
    var res = {};
    MongoClient.connect(url2, function (err, db) {
        if (err) throw err;
        db.collection("groups").findOne({"userAct": msg.username}, function (err, mongores) {
            if (err) throw err;
            else {
                if(mongores)
                    console.log("1 document found" + mongores);
            }
            db.close();
            callback(null, mongores);
        });
    });
    callback(null, 'success');
}


function handle_addgroupfiles(msg, callback){
    var res = {};
    console.log("in handle_addgroupfiles");
    console.log(msg.data);
    MongoClient.connect(url, function(err, db) {


        db.collection('groups').update({"groupname": msg.groupname}, {$push: {'files': msg.filename}});
      //  db.collection('login').update({"username": msg.username}, {$push: {'groups': msg.groupname}});

        if (err) throw err;
        console.log("1 document updated"  + 'success');
        db.close();
        // callback(null, mongores);

    });
    // return res.status(200).json({data:myobj});

    callback(null, 'success');
}
exports.handle_request = handle_request;
exports.handle_signup = handle_signup;
exports.handle_getfiles = handle_getfiles;
exports.handle_getstarfiles = handle_getstarfiles;
exports.handle_unstar=handle_unstar;
exports.handle_uploadfiles=handle_uploadfiles;
exports.handle_sharefiles=handle_sharefiles;
exports.handle_newdirectory=handle_newdirectory;
exports.handle_getgroups=handle_getgroups;
exports.handle_getgroupusers=handle_getgroupusers;
exports.handle_addgroupusers=handle_addgroupusers;
exports.handle_addgroupfiles=handle_addgroupfiles;
exports.handle_newgroup=handle_newgroup;
exports.handle_getuserActivity=handle_getuserActivity;
//exports.handle_star=handle_star;