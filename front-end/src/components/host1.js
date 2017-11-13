import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import { Route, withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import request1 from 'superagent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
let textInput2 = null;
var ul = document.getElementById('files');
var ul98 = document.getElementById('starfiles');
var ul2 = document.getElementById('groups');
var ulnew=document.getElementById('userinfo');
var ulnew2=document.getElementById('userActivity');
var ul2345=document.getElementById('group');
var  i = 0;
var li, br, a;
var li1, br1,  li2;
var h3, button2,button23, div1, div2, div3, h8, h9, h10, h11,h12,li23,t,bu23,bu24;
var h31, button21, div11, div21, div31, h23, xyz, h24, li45,div123;
var a1,b1,c1,d1,e1,f1,g1,h1,i1,ul23,ul234;
class Host1 extends Component {

    static propTypes = {
        handlehost1: PropTypes.func.isRequired
    };

    state = {
        username: '',
        host: ''
    };

    componentWillMount(){
        console.log(this.props);

        this.setState({
            username : localStorage.getItem('user123')
        });






    }
    componentDidMount() {



        let textInput = null;
        let textInput2 = null;
        var ul = document.getElementById('files');
        var ul98 = document.getElementById('starfiles');
        var ul2 = document.getElementById('groups');
        var ulnew=document.getElementById('userinfo');
        var ulnew2=document.getElementById('userActivity');
        var ul2345=document.getElementById('group');
        var  i = 0;
        var li, br, a;
        var li1, br1,  li2;
        var h3, button2,button23, div1, div2, div3, h8, h9, h10, h11,h12,li23,t,bu23,bu24;
        var h31, button21, div11, div21, div31, h23, xyz, h24, li45,div123;
        var a1,b1,c1,d1,e1,f1,g1,h1,i1,ul23,ul234;

        const url3 = 'http://localhost:3001/getgroups?sharee=' + localStorage.getItem('user123');
        fetch(url3, {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            },
        })
            .then(response => response.json())
            .then(res => {

                console.log(res);

                for(var res1234 in res.results.groups) {
                    console.log(res.results.groups[res1234]);
                    li23 = document.createElement("li");
                    li23.style.backgroundColor= "lightgrey";

                    li23.style.padding= '25px';
                    li23.style.margin= '25px';
                    li23.style.width='220px';
                    a = document.createElement("a");
                    a.appendChild(document.createTextNode(res.results.groups[res1234]));
                    a.style.fontSize = "35px";
                    a.style.border = 'none';
                    a.style.color = 'red';
                     ul23=document.createElement("ul");
                    this.handlefiles(ul23,res.results.groups[res1234]);
                   /* const url3 = 'http://localhost:3001/getgroupusers?groupname=' + res.results.groups[res1234];
                    fetch(url3, {
                        method: 'GET',
                        headers: {
                            "Accept": "application/json"
                        },
                    }).then(response => response.json())
                        .then(res => {
                            for(var res1234 in res.results.users) {
                                bu24=document.createElement("li");
                                h11= document.createElement("li");
                                h11.appendChild(document.createTextNode(res.results.users[res1234]));
                                h11.style.fontSize = "15";
                                h11.style.border = 'none';
                                h11.style.color = 'red';



                      ul23.appendChild(h11);
                            }

                        });*/
                    t = document.createElement("button");
                    t.innerHTML = "Add people to this group";
                    t.style.background = 'green';
                    t.style.margin = "10px";
                    t.style.fontSize = "12px";
                    t.style.border = 'none';
                    t.style.color = 'white';

                    var input2=document.createElement("input");
                    input2.type="text";


                    input2.style.background = 'red';
                    input2.style.margin = "10px";
                    input2.style.fontSize = "15px";
                    input2.style.border= 'none';
                    input2.style.color= 'white';
                    input2.style.display='none';

                     button23 = document.createElement("button");

                    button23.style.background = 'green';
                    button23.style.margin = "10px";
                    button23.style.fontSize = "12px";
                    button23.style.border = 'none';
                    button23.style.color = 'white';
                    button23.innerHTML = "Add";
                    button23.style.display='none';
                    input2.style.display='none';

                     ul234=document.createElement("ul");

                     this.handleusers(ul234,res.results.groups[res1234]);
 /*                   const url34 = 'http://localhost:3001/getgroupusers?groupname=' +  res.results.groups[res1234];
                    fetch(url34, {
                        method: 'GET',
                        headers: {
                            "Accept": "application/json"
                        },
                    }).then(response => response.json())
                        .then(res => {
                            for(var res1234 in res.results.files) {
                                bu24=document.createElement("li");
                                h12= document.createElement("li");
                                h12.appendChild(document.createTextNode(res.results.files[res1234]));
                                h12.style.fontSize = "15px";
                                h12.style.border = 'none';
                                h12.style.color = 'red';

                                ul234.appendChild(h12);
                            }

                        });*/
                    var button12 = document.createElement("button");
                    button12.style.background = 'green';
                    button12.style.margin = "10px";
                    button12.style.fontSize = "12px";
                    button12.style.border = 'none';
                    button12.style.color = 'white';
                    button12.innerHTML = "Add Files to this group";


                    var inputfile=document.createElement("input");
                    inputfile.type="file";


                    inputfile.style.background = 'red';
                    inputfile.style.margin = "10px";
                    inputfile.style.fontSize = "15px";
                    inputfile.style.border= 'none';
                    inputfile.style.color= 'white';
                    inputfile.style.display='none';


                    button2=document.createElement("button");
                    button2.innerText="Add";

                    button2.style.background = 'green';
                    button2.style.margin = "10px";
                    button2.style.fontSize = "12px";
                    button2.style.border= 'none';
                    button2.style.color= 'white';
                    button2.style.display='none';

                    h11=document.createElement("h5");
                    h11.innerText="Users";


                    h11.style.color = "blue";
                    h12=document.createElement("h5");
                    h12.innerText="Files";
                    h12.style.color = "blue";


                   // h12.style.fontSize = "12px";




                    button2=document.createElement("button");
                    button2.innerText="Add";

                    button2.style.background = 'green';
                    button2.style.margin = "10px";
                    button2.style.fontSize = "12px";
                    button2.style.border= 'none';
                    button2.style.color= 'white';
                    button2.style.display='none';

                    li23.appendChild(a);
                    li23.appendChild(h11);
                    li23.appendChild(ul23);
                    li23.appendChild(t);
                    li23.appendChild(input2);
                    li23.appendChild(button23);
                    li23.appendChild(h12);
                    li23.appendChild(ul234);
                    li23.appendChild(button12);
                    li23.appendChild(inputfile);

                    //li23.appendChild(div2);

                    ul2345.appendChild(li23);

                    t.addEventListener("click",function(e)
                    {  e.srcElement.closest("li").children[5].style.display='unset';
                        e.srcElement.closest("li").children[4].style.display='inline-block';
                        e.srcElement.closest("li").children[3].style.display='none';

                    });

                    button12.addEventListener("click",function(e)
                    {  e.srcElement.closest("li").children[8].style.display='none';
                        //   e.srcElement.closest("li").children[4].style.display='unset';
                        e.srcElement.closest("li").children[9].style.display='inline-block' ;
                        // e.srcElement.closest("li").children[4].style.='nowrap';
                        //e.srcElement.closest("li").children[6].style.display = 'unset';


                    });
                    button23.addEventListener("click", function (e) {
                        if( e.srcElement.closest("li").children[4].value!="") {
                            fetch('http://localhost:3001/groupsadduser?sharee=' + e.srcElement.closest("li").children[4].value, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify( {
                                    groupname: e.srcElement.closest("li").children[0].innerHTML,
                                    newuser: e.srcElement.closest("li").children[4].value
                                } )

                            })
                                .then(function (response) {
                                    alert("New user added")
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

                        var req = request1.post('http://localhost:3001/groupsaddfile?groupname='+e.srcElement.closest("li").children[0].innerHTML);


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





            });

    }

    handleusers(ul234,dev){


        const url34 = 'http://localhost:3001/getgroupusers?groupname=' +  dev;
         fetch(url34, {
         method: 'GET',
         headers: {
         "Accept": "application/json"
         },
         }).then(response => response.json())
         .then(res => {
         for(var res1234 in res.results.files) {
         bu24=document.createElement("li");
         h12= document.createElement("li");
         h12.appendChild(document.createTextNode(res.results.files[res1234]));
         h12.style.fontSize = "15px";
         h12.style.border = 'none';
         h12.style.color = 'red';

         ul234.appendChild(h12);
         }

         });
    }

    handlefiles(ul23,dev){


        const url3 = 'http://localhost:3001/getgroupusers?groupname=' + dev;
        fetch(url3, {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            },
        }).then(response => response.json())
            .then(res => {
                for(var res1234 in res.results.users) {
                    bu24=document.createElement("li");
                    h11= document.createElement("li");
                    h11.appendChild(document.createTextNode(res.results.users[res1234]));
                    h11.style.fontSize = "15";
                    h11.style.border = 'none';
                    h11.style.color = 'red';



                    ul23.appendChild(h11);
                }

            });
    }


    handleClick2(event) {

        fetch('http://localhost:3001/newGroup?email='+localStorage.getItem('user123'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {
                groupname: textInput.value
            } )
        })
            .then(function(response) {

            }).then(function(body) {
            console.log(body);
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <h3>My Groups</h3>

                        <ul id ="group"></ul>


                    <h2>Create Groups</h2>
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


                </div>
            </div>
        );
    }
}

export default Host1;