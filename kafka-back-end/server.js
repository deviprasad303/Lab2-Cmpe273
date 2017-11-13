var connection =  new require('./kafka/Connection');
var login = require('./services/login');

var topic_name = 'login_topic';
var consumer = connection.getConsumer(topic_name);
var producer = connection.getProducer();
var consumer1 = connection.getConsumer('signup_topic');
var consumer2 = connection.getConsumer('getfiles_topic');
var consumer3 = connection.getConsumer('getstarfiles_topic');
var consumer4 = connection.getConsumer('unstarfiles_topic');
var consumer5 = connection.getConsumer('uploadfiles_topic');
var consumer6 = connection.getConsumer('newdirectory_topic');
var consumer7 = connection.getConsumer('sharefiles_topic');
var consumer8 = connection.getConsumer('getgroups_topic');
var consumer9 = connection.getConsumer('getgroupusers_topic');
var consumer10 = connection.getConsumer('getgroupfiles_topic');
var consumer11 = connection.getConsumer('addgroupusers_topic');
var consumer12 = connection.getConsumer('addgroupfiles_topic');
var consumer13 = connection.getConsumer('newgroup_topic');



console.log('server is running');



consumer9.on('message', function (message) {
    console.log('message received in getfiles');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_getgroupusers(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});


consumer10.on('message', function (message) {
    console.log('message received in getfiles');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_getgroupfiles(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});


consumer13.on('message', function (message) {
    console.log('message received in newgroup');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_newgroup(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer11.on('message', function (message) {
    console.log('message received in getfiles');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_addgroupusers(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer12.on('message', function (message) {
    console.log('message received in getfiles');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_addgroupfiles(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer.on('message', function (message) {
    console.log('message received in login');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});


consumer8.on('message', function (message) {
    console.log('message received in getfiles');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_getgroups(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});


consumer4.on('message', function (message) {
    console.log('message received in unstarfiles');
    console.log(JSON.stringify(message));
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_unstar(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});




consumer1.on('message', function (message) {
    console.log('message received in signup');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_signup(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer3.on('message', function (message) {
    console.log('message received in getstarfiles');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_getstarfiles(data.data, function(err,res){
        console.log('after handle'+res);
       // console.log('after handle'+JSON.parse(res));
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
            if(err)
                console.log(err);
        });
        return;
    });
});


consumer7.on('message', function (message) {
    console.log('message received in sharefiles');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_sharefiles(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer5.on('message', function (message) {
    console.log('message received in getfiles');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_uploadfiles(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});


consumer6.on('message', function (message) {
    console.log('message received in newdirectory');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_newdirectory(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});


consumer2.on('message', function (message) {
    console.log('message received in getfiles');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_getfiles(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});