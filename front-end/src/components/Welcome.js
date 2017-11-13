import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import { Route, withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import request1 from 'superagent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Host1 from "./host1";
import Host2 from "./host2";
import Host3 from "./host3";
import {Doughnut} from 'react-chartjs-2';
import createHistory from 'history/createBrowserHistory';
//import React from 'react';
import { Link } from 'react-router-dom';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

import { connect } from 'react-redux';

import { userActions } from '../actions/index';


let textInput = null;


const data = {
    labels: [
        'Home',
        'host1',
        'host2'
    ],
    datasets: [{
        data: [2,3,4],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

class Welcome extends Component {



    state = {
        username: '',
        filesPreview: [],
        filesToBeSent: [],
        printcount: 10,
        data: {data}

    }


    handlehost1 = () => {
        console.log('host1 called');
        API.host1()
            .then((status) => {
                if(status === 200){
                    this.setState({
                        isHost1: true
                    });
                    this.props.history.push("/host1");
                }
            });
    };

    handlehost2 = () => {
        console.log('host1 called');
        API.host2()
            .then((status) => {
                if(status === 200){
                    this.setState({
                        isHost2: true
                    });
                    this.props.history.push("/host2");
                }
            });
    };

    handlehost3 = () => {

        console.log('host1 called');
        API.host3()
            .then((status) => {
                if(status === 200){
                    this.setState({
                        isHost3: true
                    });
                    this.props.history.push("/host3");
                }
            });
    };

    componentWillMount(){





        const history = createHistory();

var a1;
console.log(this.props);
        this.setState({
            username : this.props.userdata.username
        });


/*
        API.getgraphs()
            .then((res) => {
                console.log('hi');
                var json=JSON.parse(res.results);

                var count=0;
                var count1=0;
                var count2=0;
                //var count3=0;
                for(var i in json)
                {
                    console.log(json[i]);

                    //count1=0;

                    for(var j in json[i])
                    {
                        console.log(j);
                        if(j==='Home')
                            count++;
                        //  console.log(res[i][j]);
                        if(j==='host1')
                            count1++;
                        if(j==='host2')
                            count2++;

                    }


                }
                console.log(count);
                console.log(count1);
                console.log(count2);



                console.log(this.state.data.data.datasets[0].data);
                //this.state.data;
                this.state.data.data.datasets[0].data.push(count);
                this.state.data.data.datasets[0].data.push(count1);
                this.state.data.data.datasets[0].data.push(count2);
                console.log(this.state.data.data.datasets[0].data);


                //  this.state.data.datasets[0].data.push(count2);
                //  console.log(this.state.data.datasets[0]);
            });*/

    }



    componentDidMount(){

        var  ulnew244=document.getElementById('userActivity');









        /*API.getgraphs()
            .then((res) => {
                console.log('hi');
                var json=JSON.parse(res.results);

                var count=0;
                var count1=0;
                var count2=0;
                //var count3=0;
                for(var i in json)
                {
                    console.log(json[i]);

                    //count1=0;

                    for(var j in json[i])
                    {
                        console.log(j);
                        if(j==='Home')
                            count++;
                        //  console.log(res[i][j]);
                        if(j==='host1')
                            count1++;
                        if(j==='host2')
                            count2++;

                    }


                }
                console.log(count);
                console.log(count1);
                console.log(count2);



                console.log(this.state.data.data.datasets[0].data);
                //this.state.data;
                this.state.data.data.datasets[0].data.push(count);
                this.state.data.data.datasets[0].data.push(count1);
                this.state.data.data.datasets[0].data.push(count2);
                console.log(this.state.data.data.datasets[0].data);*/





                  //  this.props.dispatch(userActions.getAll());

                    let textInput = null;
                    let textInput2 = null;
                    var ul = document.getElementById('files');
                    var ul98 = document.getElementById('starfiles');
                    var ul2 = document.getElementById('groups');
                    var ulnew=document.getElementById('userinfo');
                    var ulnew2=document.getElementById('userActivity');
                    var ul2345=document.getElementById('Directories');
                    var  i = 0;
                    var li, br, a;
                    var li1, br1,  li2;
                    var h3, button2, div1, div2, div3, h8, h9, h10, h11,li23,t,bu23,bu24;
                    var h31, button21, div11, div21, div31, h23, xyz, h24, li45,div123;
                    var a1,b1,c1,d1,e1,f1,g1,h1,i1;
                    /*const url34 = 'http://localhost:3001/userActivity?email=' + JSON.parse(localStorage["user"]).username;
                    fetch(url34, {
                        method: 'GET',
                        headers: {
                            "Accept": "application/json"
                        },
                    })
                        .then(response => response.json())
                        .then(res => {

                            for(var res1234 in res) {
                                i1 = document.createElement("li");
                                i1.appendChild(document.createTextNode(res[res1234]['useractions']));

                                ulnew2.appendChild(i1);


                            }



                        });*/

                   /* const url33 = 'http://localhost:3001/getuserinfo';
                    fetch(url33, {
                        method: 'GET',
                        headers: {
                            "Accept": "application/json"
                        },
                    })
                        .then(response => response.json())
                        .then(res => {

                            for(var res1234 in res) {
                                a1 = document.createElement("li");
                                a1.appendChild(document.createTextNode('Bio:'+res[res1234]['bio']));
                                b1 = document.createElement("li");
                                b1.appendChild(document.createTextNode('work'+res[res1234]['work']));
                                c1 = document.createElement("li");
                                c1.appendChild(document.createTextNode('education:'+res[res1234]['education']));
                                d1 = document.createElement("li");
                                d1.appendChild(document.createTextNode('Contactinfo:'+res[res1234]['contactinfo']));
                                e1 = document.createElement("li");
                                e1.appendChild(document.createTextNode('lifeevents:'+res[res1234]['lifeevents']));
                                f1 = document.createElement("li");
                                f1.appendChild(document.createTextNode('interests:'+res[res1234]['interests']));
                                g1 = document.createElement("li");
                                g1.appendChild(document.createTextNode('music:'+res[res1234]['music']));
                                h1 = document.createElement("li");
                                h1.appendChild(document.createTextNode('sports:'+res[res1234]['sports']));
                                ulnew.appendChild(a1);
                                ulnew.appendChild(b1);
                                ulnew.appendChild(c1);
                                ulnew.appendChild(d1);
                                ulnew.appendChild(e1);
                                ulnew.appendChild(f1);
                                ulnew.appendChild(g1);
                                ulnew.appendChild(h1);

                            }



                        });*/



                    const url3 = 'http://localhost:3001/getstarfiles/'+ this.state.username;
                    fetch(url3, {
                        method: 'GET',
                        headers: {
                            "Accept": "application/json"
                        },
                    })
                        .then(response => response.json())
                        .then(res => {
                            //li23=document.createElement("li");
                            a = document.createElement("a");
                            t=document.createElement("button");
                          console.log(res);





                            for(var res1234 in res.results.dir) {
                                console.log(res.results.dir[res1234]);
                                li23 = document.createElement("li");
                                a = document.createElement("a");
                                a.appendChild(document.createTextNode(res.results.dir[res1234].dirname));
                                a.style.fontSize = "15px";
                                a.style.border = 'none';
                                a.style.color = 'red';

                                t = document.createElement("button");
                                t.innerHTML = "Add files to this directory";
                                t.style.background = 'green';
                                t.style.margin = "10px";
                                t.style.fontSize = "12px";
                                t.style.border = 'none';
                                t.style.color = 'white';
                                var button = document.createElement("button");
                                var inputfile=document.createElement("input");
                                inputfile.type="file";

                                button.innerHTML = "upload";
                                inputfile.style.background = 'red';
                                inputfile.style.margin = "10px";
                                inputfile.style.fontSize = "15px";
                                inputfile.style.border= 'none';
                                inputfile.style.color= 'white';
                                inputfile.style.display='none';
                                li23.appendChild(a);
                                li23.appendChild(inputfile);


                                li23.appendChild(t);

                                button2=document.createElement("button");
                                button2.innerText="Share";

                                button2.style.background = 'green';
                                button2.style.margin = "10px";
                                button2.style.fontSize = "12px";
                                button2.style.border= 'none';
                                button2.style.color= 'white';
                                div1=document.createElement("input");
                                div1.type="text";
                                div1.style.display='none';

                                div1.style.margin = "9px";
                                div1.style.fontSize = "10px";
                                div1.style.border= 'none';
                                // div1.style.color= 'white';
                                div2=document.createElement('button');
                                div2.style.background = 'green';
                                div2.style.margin = "9px";
                                div2.style.fontSize = "10px";
                                div2.style.border= 'none';
                                div2.innerText="Share";
                                div2.style.color= 'white';
                                div2.style.display='none';
                                li23.appendChild(button2);
                                li23.appendChild(div1);
                                li23.appendChild(div2);
                                h8=document.createElement('h2');
                                li23.appendChild(h8);



                                ul2345.appendChild(li23);
                                t.addEventListener("click",function(e)
                                {  e.srcElement.closest("li").children[2].style.display='none';
                                    e.srcElement.closest("li").children[1].style.display='unset';


                                });

                                button2.addEventListener("click",function(e)
                                {  e.srcElement.closest("li").children[3].style.display='none';
                                 //   e.srcElement.closest("li").children[4].style.display='unset';
                                        e.srcElement.closest("li").children[4].style.display='inline-block' ;
                                   // e.srcElement.closest("li").children[4].style.='nowrap';
                                    e.srcElement.closest("li").children[5].style.display = 'unset';


                                });
                                div2.addEventListener("click", function (e) {
                                    if( e.srcElement.closest("li").children[4].value!="") {
                                        fetch('http://localhost:3001/sharefile?sharee=' + e.srcElement.closest("li").children[4].value, {
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify( {
                                                filename: e.srcElement.closest("li").children[0].innerHTML,
                                                directory:'yes',
                                                sharee: e.srcElement.closest("li").children[4].value
                                            } )

                                        })
                                            .then(function (response) {
                                                alert("File Sharing completed")
                                            }).then(function (body) {
                                            console.log(body);
                                        });
                                    }
                                });

                                inputfile .addEventListener("change",function(e){
                                    var path = (e.target || e.srcElement).files[0];
                                    console.log((e.target || e.srcElement));
                                    console.log(path);
                                    console.log( e.srcElement.closest("li").children[0].innerHTML);

                                    var req = request1.post('http://localhost:3001/files?dir='+e.srcElement.closest("li").children[0].innerHTML+'./.'+localStorage.getItem('user123'));

                                    // console.log("files",filesArray[i][0]);
                                    req.attach(path.name,path);




                                    req.end(function(err,res){
                                        if(err){
                                            console.log("error ocurred");
                                        }
                                        console.log("res",res);
                                        // console.log(filesArray);
                                        alert("File printing completed")
                                    });
                                });

                            }
                           var axyz;
                            for(var res1234 in res.results.userAct) {



                               axyz = document.createElement("li");
                                axyz.appendChild(document.createTextNode(res.results.userAct[res1234]));
                                ulnew2.appendChild(axyz);
                            }


                            //div31 = document.createElement('button');

                            // t.style.display = 'none';
                            for(var res1234 in res.results.files) {
                                console.log(res.results.files[res1234].isstar);
                                li23 = document.createElement("li");
                                a = document.createElement("a");
                                a.appendChild(document.createTextNode(res.results.files[res1234].filename));
                                a.style.fontSize = "12px";
                                a.style.border = 'none';
                                a.style.color = 'red';

                                t = document.createElement("button");
                                t.innerHTML = "Star it";
                                t.style.background = 'green';
                                t.style.margin = "10px";
                                t.style.fontSize = "12px";
                                t.style.border = 'none';
                                t.style.color = 'white';
                                div123=document.createElement('button');
                                div123.style.background = 'green';
                                div123.style.margin = "9px";
                                div123.style.fontSize = "10px";
                                div123.style.border= 'none';
                                div123.innerText="Share";
                                div123.style.color= 'white';
                                //div123.style.display='none';
                                div1=document.createElement("input");
                                div1.type="text";
                                div1.style.display='none';

                                div1.style.margin = "9px";
                                div1.style.fontSize = "10px";
                                div1.style.border= 'none';
                                // div1.style.color= 'white';
                                div2=document.createElement('button');
                                div2.style.background = 'green';
                                div2.style.margin = "9px";
                                div2.style.fontSize = "10px";
                                div2.style.border= 'none';
                                div2.innerText="Share";
                                div2.style.color= 'white';
                                div2.style.display='none';


                                li23.appendChild(a);
                                li23.appendChild(t);
                                li23.appendChild(div123);
                                li23.appendChild(div1);
                                li23.appendChild(div2);


                                ul.appendChild(li23);


                                div123.addEventListener("click",function(e)
                                {  e.srcElement.closest("li").children[2].style.display='none';
                                    //   e.srcElement.closest("li").children[4].style.display='unset';
                                    e.srcElement.closest("li").children[3].style.display='inline-block' ;
                                    // e.srcElement.closest("li").childrn[4].style.='nowrap';
                                    e.srcElement.closest("li").children[4].style.display = 'unset';


                                });


                                div2.addEventListener("click", function (e) {
                                    if( e.srcElement.closest("li").children[3].value!="") {
                                        fetch('http://localhost:3001/sharefile?sharee=' + e.srcElement.closest("li").children[3].value, {
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify( {
                                                filename: e.srcElement.closest("li").children[0].innerHTML,
                                                directory:'NO',
                                                sharee: e.srcElement.closest("li").children[3].value
                                            } )

                                        })
                                            .then(function (response) {
                                                alert("File Sharing completed")
                                            }).then(function (body) {
                                            console.log(body);
                                        });
                                    }
                                });





                                a.addEventListener("click", function (e) {

                                    fetch("http://localhost:3001/downloadfile?filename=" + (e.target || e.srcElement).innerText, {
                                        method: 'GET',
                                        headers: {

                                            /*

                                             'Accept': 'application/octet-stream',
                                             'Content-Type': 'application/octet-stream',
                                             'Content-Disposition': 'attachment'
                                             */
                                        }

                                    })
                                        .then(response => {
                                            window.open(response.url);
                                        });
                                });

                                t.addEventListener("click", function (e) {

                                    fetch('http://localhost:3001/unstarfile/'+  e.srcElement.closest("li").children[0].innerHTML, {
                                        method: 'POST',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({
                                            username: localStorage.getItem('user123')
                                        })

                                    })
                                        .then(function (response) {

                                            alert('Starred');
                                        }).then(function (body) {
                                        // alert('unstarred');
                                        console.log(body);
                                    });


                                });

                                if(res.results.files[res1234].isstar===1) {
                                    li23 = document.createElement("li");
                                    a = document.createElement("a");
                                    t = document.createElement("button");
                                    t.innerHTML = "unstar"
                                    t.style.background = 'green';
                                    t.style.margin = "10px";
                                    t.style.fontSize = "12px";
                                    t.style.border = 'none';
                                    t.style.color = 'white';
                                    //div31 = document.createElement('button');

                                    //h3 = document.createElement("h2");
                                    console.log(res.results.files[res1234]);
                                    //if(res.results.files[res1234].isstar===1)
                                    a.appendChild(document.createTextNode(res.results.files[res1234].filename));
                                    a.style.fontSize = "14px";
                                    a.style.border = 'none';
                                    a.style.color = 'green';

                                    li23.appendChild(a);
                                    li23.appendChild(t);

                                    ul98.appendChild(li23);


                                    a.addEventListener("click", function (e) {

                                        fetch("http://localhost:3001/downloadfile?filename=" + (e.target || e.srcElement).innerText, {
                                            method: 'GET',
                                            headers: {

                                                /*

                                                 'Accept': 'application/octet-stream',
                                                 'Content-Type': 'application/octet-stream',
                                                 'Content-Disposition': 'attachment'
                                                 */
                                            }

                                        })
                                            .then(response => {
                                                window.open(response.url);
                                            });
                                    });

                                    var uname=this.state.username;

                                    t.addEventListener("click", function (e) {

                                        fetch('http://localhost:3001/unstarfile/'+  e.srcElement.closest("li").children[0].innerHTML, {
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify({
                                                username: localStorage.getItem('user123')
                                            })

                                        })
                                            .then(function (response) {

                                                alert('unstarred');
                                            }).then(function (body) {
                                            // alert('unstarred');
                                            console.log(body);
                                        });


                                    });
                                }
                            }
                            /*

                             'Accept': 'application/octet-stream',
                             'Content-Type': 'application/octet-stream',
                             'Content-Disposition': 'attachment'
                             */      });



                    //});



                    /*const url2='http://localhost:3001/groups?email='+JSON.parse(localStorage["user"]).username;
                    fetch(url2,{
                        method: 'GET',
                        headers: {
                            "Accept": "application/json"
                        },
                    })
                        .then(response => response.json())
                        .then(res => {

                                console.log(res);

                                for (var xy in res) {
                                    li1 = document.createElement("li");



                                    // li1.appendChild(h31);
                                    const url3 = 'http://localhost:3001/groupmembers?groupname=' + res[xy]['groupname'];
                                    fetch(url3, {
                                        method: 'GET',
                                        headers: {
                                            "Accept": "application/json"
                                        },
                                    })
                                        .then(response => response.json())
                                        .then(response => {
                                            console.log(response);
                                            // ul2 = document.createElement("ul");
                                            //ul2.style.fontSize = "15px";
                                            bu23 = document.createElement("button");

                                            bu23.style.background = 'green';
                                            bu23.style.margin = "9px";
                                            bu23.style.fontSize = "10px";
                                            bu23.style.border = 'none';
                                            bu23.innerText = "Delete";
                                            bu23.style.color = 'white';
                                            //  bu23.style.display = 'none';
                                            li23 = document.createElement("li");
                                            h24 = document.createElement("h3");

                                            console.log(response);
                                            h24.appendChild(document.createTextNode(response[0]['groupname']));
                                            li23.appendChild(h24);
                                            li23.appendChild(bu23);
                                            li45= document.createElement("li");
                                            for (var y in response) {
                                                h23 = document.createElement("h5");
                                                h23.appendChild(document.createTextNode(response[y]['email']));
                                                bu24 = document.createElement("button");

                                                bu24.style.background = 'green';
                                                bu24.style.margin = "9px";
                                                bu24.style.fontSize = "10px";
                                                bu24.style.border = 'none';
                                                bu24.innerText = "User Delete";
                                                bu24.style.color = 'white';
                                                li45.appendChild(h23);
                                                li45.appendChild(bu24);




                                            }
                                            li23.appendChild(li45);

                                            div11 = document.createElement("button");
                                            div11.innerHTML = "ADD Members"
                                            div11.style.background = 'green';
                                            div11.style.margin = "10px";
                                            div11.style.fontSize = "12px";
                                            div11.style.border = 'none';
                                            div11.style.color = 'white';
                                            li23.appendChild(div11);

                                            div21 = document.createElement("input");
                                            div21.type = "text";
                                            div21.style.display = 'none';

                                            div21.style.margin = "9px";
                                            div21.style.fontSize = "10px";
                                            div21.style.border = 'none';
                                            //div1.style.color = 'white';
                                            div31 = document.createElement('button');
                                            div31.style.background = 'green';
                                            div31.style.margin = "9px";
                                            div31.style.fontSize = "10px";
                                            div31.style.border = 'none';
                                            div31.innerText = "Add";
                                            div31.style.color = 'white';
                                            div31.style.display = 'none';

                                            li23.appendChild(div21);
                                            li23.appendChild(div31);



                                            li1.appendChild(li23);
                                            // li1.appendChild(ul2);

                                            bu23.addEventListener("click", function (e) {
                                                //      if( e.srcElement.closest("li").children[3].value!="") {
                                                fetch('http://localhost:3001/deletegroup?email=' + e.srcElement.closest("li").children[2].innerHTML, {
                                                    method: 'POST',
                                                    headers: {
                                                        'Accept': 'application/json',
                                                        'Content-Type': 'application/json',
                                                    },
                                                    body: JSON.stringify( {
                                                        groupname: e.srcElement.closest("li").children[0].innerHTML
                                                    } )

                                                })
                                                    .then(function (response) {

                                                    }).then(function (body) {
                                                    console.log(body);
                                                });


                                            });


                                            div11.addEventListener("click", function (e) {
                                                e.srcElement.closest("li").children[3].style.display = 'none';
                                                e.srcElement.closest("li").children[4].style.display = 'unset';
                                                e.srcElement.closest("li").children[5].style.display = 'block';

                                            });
                                            bu24.addEventListener("click", function (e) {

                                                fetch('http://localhost:3001/deleteuserfromgroup?email=' + e.srcElement.closest("li").children[0].innerHTML, {
                                                    method: 'POST',
                                                    headers: {
                                                        'Accept': 'application/json',
                                                        'Content-Type': 'application/json',
                                                    },
                                                    body: JSON.stringify( {
                                                        groupname: e.srcElement.closest("li").children[0].innerHTML
                                                    } )

                                                })
                                                    .then(function (response) {

                                                    }).then(function (body) {
                                                    console.log(body);
                                                });


                                            });

                                            div31.addEventListener("click", function (e) {
                                                console.log( e.srcElement.closest("li").children[3].value);
                                                if( e.srcElement.closest("li").children[3].value!="") {
                                                    fetch('http://localhost:3001/addgroup?email=' + e.srcElement.closest("li").children[4].value, {
                                                        method: 'POST',
                                                        headers: {
                                                            'Accept': 'application/json',
                                                            'Content-Type': 'application/json',
                                                        },
                                                        body: JSON.stringify( {
                                                            groupname: e.srcElement.closest("li").children[0].innerHTML
                                                        } )

                                                    })
                                                        .then(function (response) {

                                                        }).then(function (body) {
                                                        console.log(body);
                                                    });
                                                }
                                            });


                                        });
                                    ul2.appendChild(li1);




                                    div11 = document.createElement("button");
                                    div11.innerHTML = "ADD Members"
                                    div11.style.background = 'green';
                                    div11.style.margin = "10px";
                                    div11.style.fontSize = "12px";
                                    div11.style.border = 'none';
                                    div11.style.color = 'white';
                                    //     li1.append(div11);
                                    div21 = document.createElement("input");
                                    div21.type = "text";
                                    div21.style.display = 'none';

                                    div21.style.margin = "9px";
                                    div21.style.fontSize = "10px";
                                    div21.style.border = 'none';
                                    //div1.style.color = 'white';
                                    div31 = document.createElement('button');
                                    div31.style.background = 'green';
                                    div31.style.margin = "9px";
                                    div31.style.fontSize = "10px";
                                    div31.style.border = 'none';
                                    div31.innerText = "Add";
                                    div31.style.color = 'white';
                                    div31.style.display = 'none';

                                    // li1.appendChild(div21);
                                    // li1.appendChild(div31);
                                    ul2.append(li1);
                                    div11.addEventListener("click", function (e) {
                                        e.srcElement.closest("li").children[1].style.display = 'none';
                                        e.srcElement.closest("li").children[2].style.display = 'unset';
                                        e.srcElement.closest("li").children[3].style.display = 'block';

                                    });
                                }



                            }
                        );*/


                    /*const url = 'http://localhost:3001/getstarfiles';
                    fetch(url,{
                        method: 'GET',
                        headers: {
                            "Accept": "application/json"
                        },
                    })
                        .then(res => {
                            console.log(res);
                            //res.data;
                        })*/
                       /* .then(response => {
                            console.log(response);
                            for(var res123 in response) {
                                a=document.createElement("a");
                                h3=document.createElement("h2");

                                if(response[res123]['filename'].indexOf('.PDF')!=-1||response[res123]['filename'].indexOf('.HTML')!=-1||response[res123]['filename'].indexOf('.html')!=-1|| response[res123]['filename'].indexOf('.txt') !== -1||response[res123]['filename'].indexOf('.json') !== -1||response[res123]['filename'].indexOf('.png') !== -1||response[res123]['filename'].indexOf('.jpg') !== -1||response[res123]['filename'].indexOf('.docx') !== -1||response[res123]['filename'].indexOf('.txt') !== -1||response[res123]['filename'].indexOf('.zip') !== -1||response[res123]['filename'].indexOf('.txt') !== -1||response[res123]['filename'].indexOf('.pdf') !== -1) {
                                    li = document.createElement("li");
                                    if (response[res123]['filename'])

                                        a.appendChild(document.createTextNode(response[res123]['filename']));
                                    a.style.fontSize = "15px";
                                    li.appendChild(a);

                                    button2 = document.createElement("button");
                                    button2.innerText = "Share";
                                    button2.style.background = 'green';
                                    button2.style.margin = "10px";
                                    button2.style.fontSize = "12px";
                                    button2.style.border = 'none';
                                    button2.style.color = 'white';
                                    div1 = document.createElement("input");
                                    div1.type = "text";
                                    div1.style.display = 'none';

                                    div1.style.margin = "9px";
                                    div1.style.fontSize = "10px";
                                    div1.style.border = 'none';
                                    //div1.style.color = 'white';
                                    div2 = document.createElement('button');
                                    div2.style.background = 'green';
                                    div2.style.margin = "9px";
                                    div2.style.fontSize = "10px";
                                    div2.style.border = 'none';
                                    div2.innerText = "Share";
                                    div2.style.color = 'white';
                                    div2.style.display = 'none';
                                    h8=document.createElement('h2');
                                    h8.appendChild(document.createTextNode('Group share'));
                                    h8.style.display = 'none';
                                    h9 = document.createElement("input");
                                    h9.type = "text";
                                    h9.style.display = 'none';

                                    h9.style.margin = "9px";
                                    h9.style.fontSize = "10px";
                                    h9.style.border = 'none';
                                    //div1.style.color = 'white';
                                    h10 = document.createElement('button');
                                    h10.style.background = 'green';
                                    h10.style.margin = "9px";
                                    h10.style.fontSize = "10px";
                                    h10.style.border = 'none';
                                    h10.innerText = "Share";
                                    h10.style.color = 'white';
                                    h10.style.display = 'none';

                                    h11 = document.createElement('button');
                                    h11.style.background = 'green';
                                    h11.style.margin = "9px";
                                    h11.style.fontSize = "10px";
                                    h11.style.border = 'none';
                                    h11.innerText = "Star it";
                                    h11.style.color = 'white';
                                    // h11.style.display = 'none';

                                    li.appendChild(button2);
                                    li.appendChild(div1);
                                    li.appendChild(div2);

                                    li.appendChild(h8);
                                    li.appendChild(h9);
                                    li.appendChild(h10);
                                    li.appendChild(h11);

                                    button2.addEventListener("click", function (e) {
                                        e.srcElement.closest("li").children[1].style.display = 'none';
                                        e.srcElement.closest("li").children[2].style.display = 'unset';
                                        e.srcElement.closest("li").children[3].style.display = 'block';
                                        e.srcElement.closest("li").children[4].style.display = 'block';
                                        e.srcElement.closest("li").children[5].style.display = 'unset';
                                        e.srcElement.closest("li").children[6].style.display = 'block';

                                    });

                                    h11.addEventListener("click", function (e) {

                                        fetch('http://localhost:3001/starfile?sharee=' +JSON.parse(localStorage["user"]).username, {
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify( {
                                                filename: e.srcElement.closest("li").children[0].innerHTML
                                            } )

                                        })
                                            .then(function (response) {

                                            }).then(function (body) {
                                            console.log(body);
                                        });

                                    });
                                    h10.addEventListener("click", function (e) {
                                        if( e.srcElement.closest("li").children[5].value!="") {
                                            fetch('http://localhost:3001/sharegroupfile?sharee=' + e.srcElement.closest("li").children[5].value, {
                                                method: 'POST',
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json',
                                                },
                                                body: JSON.stringify( {
                                                    filename: e.srcElement.closest("li").children[0].innerHTML
                                                } )

                                            })
                                                .then(function (response) {

                                                }).then(function (body) {
                                                console.log(body);
                                            });
                                        }
                                    });

                                    div2.addEventListener("click", function (e) {
                                        if( e.srcElement.closest("li").children[2].value!="") {
                                            fetch('http://localhost:3001/sharefile?sharee=' + e.srcElement.closest("li").children[2].value, {
                                                method: 'POST',
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json',
                                                },
                                                body: JSON.stringify( {
                                                    filename: e.srcElement.closest("li").children[0].innerHTML
                                                } )

                                            })
                                                .then(function (response) {

                                                }).then(function (body) {
                                                console.log(body);
                                            });
                                        }
                                    });

                                }
                                else {
                                    li = document.createElement("li");
                                    if (response[res123]['filename'])

                                        h3.appendChild(document.createTextNode(response[res123]['filename']));
                                    li.appendChild(h3);
                                    i++;




                                    var button = document.createElement("button");
                                    var inputfile=document.createElement("input");
                                    inputfile.type="file";

                                    button.innerHTML = "upload";
                                    inputfile.style.background = 'red';
                                    inputfile.style.margin = "10px";
                                    inputfile.style.fontSize = "15px";
                                    inputfile.style.border= 'none';
                                    inputfile.style.color= 'white';
                                    li.appendChild(inputfile);
                                    //li.appendChild(button);
                                    button2=document.createElement("button");
                                    button2.innerText="Share";

                                    button2.style.background = 'green';
                                    button2.style.margin = "10px";
                                    button2.style.fontSize = "12px";
                                    button2.style.border= 'none';
                                    button2.style.color= 'white';
                                    div1=document.createElement("input");
                                    div1.type="text";
                                    div1.style.display='none';

                                    div1.style.margin = "9px";
                                    div1.style.fontSize = "10px";
                                    div1.style.border= 'none';
                                    // div1.style.color= 'white';
                                    div2=document.createElement('button');
                                    div2.style.background = 'green';
                                    div2.style.margin = "9px";
                                    div2.style.fontSize = "10px";
                                    div2.style.border= 'none';
                                    div2.innerText="Share";
                                    div2.style.color= 'white';
                                    div2.style.display='none';
                                    li.appendChild(button2);
                                    li.appendChild(div1);
                                    li.appendChild(div2);
                                    h8=document.createElement('h2');
                                    h8.appendChild(document.createTextNode('Group share'));
                                    h8.style.display = 'none';
                                    h9 = document.createElement("input");
                                    h9.type = "text";
                                    h9.style.display = 'none';

                                    h9.style.margin = "9px";
                                    h9.style.fontSize = "10px";
                                    h9.style.border = 'none';
                                    //div1.style.color = 'white';
                                    h10 = document.createElement('button');
                                    h10.style.background = 'green';
                                    h10.style.margin = "9px";
                                    h10.style.fontSize = "10px";
                                    h10.style.border = 'none';
                                    h10.innerText = "Share";
                                    h10.style.color = 'white';
                                    h10.style.display = 'none';

                                    h11 = document.createElement('button');
                                    h11.style.background = 'green';
                                    h11.style.margin = "9px";
                                    h11.style.fontSize = "10px";
                                    h11.style.border = 'none';
                                    h11.innerText = "Star it";
                                    h11.style.color = 'white';
                                    // h11.style.display = 'none';
                                    li.appendChild(h8);
                                    li.appendChild(h9);
                                    li.appendChild(h10);
                                    li.appendChild(h11);


                                    button2.addEventListener("click",function(e)
                                        {  e.srcElement.closest("li").children[2].style.display='none';
                                            e.srcElement.closest("li").children[4].style.display='unset';
                                            e.srcElement.closest("li").children[3].style.display='unset';
                                            e.srcElement.closest("li").children[5].style.display = 'block';
                                            e.srcElement.closest("li").children[6].style.display = 'unset';
                                            e.srcElement.closest("li").children[7].style.display = 'block';

                                        }
                                    );
                                    h10.addEventListener("click", function (e) {
                                        if( e.srcElement.closest("li").children[5].value!="") {
                                            fetch('http://localhost:3001/sharegroupfile?sharee=' + e.srcElement.closest("li").children[6].value, {
                                                method: 'POST',
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json',
                                                },
                                                body: JSON.stringify( {
                                                    filename: e.srcElement.closest("li").children[0].innerHTML
                                                } )

                                            })
                                                .then(function (response) {

                                                }).then(function (body) {
                                                console.log(body);
                                            });
                                        }
                                    });

                                    div2.addEventListener("click", function (e) {


                                        //  alert( e.srcElement.closest("li"));

                                        if( e.srcElement.closest("li").children[3].value!="") {
                                            fetch('http://localhost:3001/sharefile?sharee=' + e.srcElement.closest("li").children[3].value, {
                                                method: 'POST',
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json',
                                                },
                                                body: JSON.stringify( {
                                                    filename: e.srcElement.closest("li").children[0].innerHTML
                                                } )

                                            })
                                                .then(function (response) {
                                                    alert(response);

                                                }).then(function (body) {
                                                console.log(body);
                                            });
                                        }

                                    });



                                    inputfile .addEventListener("change",function(e){
                                        var path = (e.target || e.srcElement).files[0];
                                        console.log((e.target || e.srcElement));
                                        console.log(path);
                                        console.log( e.srcElement.closest("       li").children[0].innerHTML);

                                        var req = request.post('http://localhost:3001/files?dir='+e.srcElement.closest("li").children[0].innerHTML+'./.'+JSON.parse(localStorage["user"]).username);

                                        // console.log("files",filesArray[i][0]);
                                        req.attach(path.name,path);




                                        req.end(function(err,res){
                                            if(err){
                                                console.log("error ocurred");
                                            }
                                            console.log("res",res);
                                            // console.log(filesArray);
                                            alert("File printing completed")
                                        });
                                    });







                                }















                                li.className="Files";
                                a.addEventListener("click",function(e){

                                    fetch("http://localhost:3001/downloadfile?filename="+(e.target || e.srcElement).innerText,{
                                        method: 'GET',
                                        headers: {

                                            /!*

                                             'Accept': 'application/octet-stream',
                                             'Content-Type': 'application/octet-stream',
                                             'Content-Disposition': 'attachment'
                                             *!/      }

                                    })
                                        .then(response=>{
                                            window.open(response.url);
                                        });
                                });

                                ul.append(li);
                            }console.log(response);
                        })*/
               // }


                //  this.state.data.datasets[0].data.push(count2);
                //  console.log(this.state.data.datasets[0]);
            //});


        document.title = `Welcome, ${this.state.username} !!`;

        var ulnew=document.getElementById('userinfo');
        var a1;





/*
        API.getfiles(this.state.username)
            .then((res) => {
           //     console.log(res.results.files);
             for(var res1234 in res.results.files) {
                    console.log(res1234);
                    console.log(res.results.files[res1234]);
                    a1 = document.createElement("li");
                    a1.appendChild(document.createTextNode(res.results.files[res1234].filename));


                   ulnew.appendChild(a1);


                }
                if (res.data !== "err") {
                    this.setState({
                        isLoggedIn: true,
                        message: "Signup successful, Please login again...",
                        userdata: res.data
                    });

                }
                else {
                    this.setState({
                        isLoggedIn: false,
                        message: "Sign up failed. Try again..!!"
                    });




                }
            });*/
    }

    handleClick2(event) {

        fetch('http://localhost:3001/newdirectory?email='+localStorage.getItem('user123'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {
                directory: textInput.value
            } )
        })
            .then(function(response) {

            }).then(function(body) {
            console.log(body);
        });
    }

    handleClick(event){
        // console.log("handleClick",event);
        var self = this;
        this.setState({ submitted: true });
        if(this.state.filesToBeSent.length>0){
            var filesArray = this.state.filesToBeSent;

            var req = request1.post('http://localhost:3001/files?email='+localStorage.getItem('user123'));

            for(var i in filesArray){
                 console.log("files",filesArray[i][0]);
                req.attach(filesArray[i][0].name,filesArray[i][0])
                console.log(req);
            }
            //console.log(req);
            req.end(function(err,res){
                if(err){
                    console.log("error ocurred");
                }
                console.log("res",res);
                console.log(filesArray);
                alert("File uploading completed")
            });
        }
        else{
            alert("Please upload some files first");
        }
    }


    onDrop(acceptedFiles, rejectedFiles) {
        // console.log('Accepted files: ', acceptedFiles[0].name);
        var filesToBeSent=this.state.filesToBeSent;


        if(filesToBeSent.length < this.state.printcount){
            filesToBeSent.push(acceptedFiles);
            var filesPreview=[];
            for(var i in filesToBeSent){
                console.log(filesToBeSent);
                filesPreview.push(<div>
                        {filesToBeSent[i][0].name}
                        <MuiThemeProvider>
                            <a href="#"><FontIcon
                                className="material-icons customstyle"
                                color={blue500}
                                styles={{ top:10,}}
                            >clear</FontIcon></a>
                        </MuiThemeProvider>
                    </div>
                )
            }
            this.setState({filesToBeSent,filesPreview});
        }
        else{
            alert("You have reached the limit of printing files at a time")
        }
    }


    handleform(event)
    {

    }



    render(){
        return(



            <div class="container">

                <div class="row">

                    <div class="col-sm-6">

                    <div className="alert alert-warning" role="alert">
                        {this.state.username}, welcome to my App..!!
                    </div>
                    <h3>User Info</h3>
                        <ul>
                        <li>Bio : I am asoftware Engineer</li>
                        <li>Work : Software Developer</li>
                        <li>Education: Masters</li>
                        <li>Contact Info : 66932432454</li>
                        <li>lifeevents : Adventure Hiking</li>
                        <li>Bio : I am asoftware Engineer</li>
                        <li>Interests : Reading books</li>
                        <li>Music : Karnatic</li>
                        <li>sports : Cricket, Table tennis</li>

                        </ul>

                    <h3>User Activity</h3>
                    <ul id="userActivity"></ul>
                    <p>
                        <h3>Files:</h3>
                        <h4>Star files:</h4>
                        <ul className="App" id="starfiles"></ul>

                        <div>-----------------------------------------------</div>
                        <ul className="App" id="files"></ul>
                        <h4>Directories:</h4>
                        <ul className="App" id="Directories"></ul>
                    </p>

                    <h3>Upload file</h3>


                    <p>

                            <MuiThemeProvider>
                                <div>

                                    <h3>Print Files</h3>

                                </div>
                            </MuiThemeProvider>
                            <center>
                                <div>
                                    You can upload upto {this.state.printcount} files at a time.
                                </div>

                                <Dropzone onDrop={(files) => this.onDrop(files)}>
                                    <div>Try dropping some files here, or click to select files to upload.</div>
                                </Dropzone>
                                <div>
                                    Files to be printed are:
                                    {this.state.filesPreview}
                                </div>








                            </center>
                            <div>
                                {this.state.printingmessage}
                            </div>
                            <MuiThemeProvider>
                                <button label="Print Files" primary={true}  onClick={(event) => this.handleClick(event)}>Print Files</button>
                            </MuiThemeProvider>





                            <h2>Create Directory</h2>
                            <div>
                                <input
                                    type="text"
                                    ref={(input) => { textInput = input; }} />

                                <input
                                    type="button"
                                    value="Create"
                                    onClick={(event) => this.handleClick2(event)}
                                />
                            </div>








                               <h2>Doughnut Example</h2>
                                <Doughnut data={this.state.data.data}   />



                                <div id="userinfo"></div>


                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    onClick={() => this.props.handleLogout()}>
                                    Logout
                                </button>

                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    onClick={() =>


                                        this.props.handlehost1()}>

                                    Handle Groups
                                </button>


                    </p> .
                </div>

                </div>

                <Route exact path="/host1" render={() => (
                    <div>
                        <Host1 handlehost1={this.handlehost1}/>

                    </div>
                )}/>
                <Route exact path="/host2" render={() => (
                    <div>
                        <Host2 handlehost2={this.handlehost2}/>

                    </div>
                )}/>
                <Route exact path="/host3" render={() => (
                    <div>
                        <Host3 handlehost3={this.handlehost3}/>

                    </div>
                )}/>
            </div>






        )
    }
}

export default Welcome;







