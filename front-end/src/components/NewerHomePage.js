import React, {Component} from 'react';
import { Route, withRouter  } from 'react-router-dom';

import * as API from '../api/API';
import Login from "./Login";

import Message from "./Message";
import Welcome from "./Welcome";
import SignUp from "./signUp";
import Host1 from "./host1";
import Host2 from "./host2";
import Host3 from "./host3";
class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        userdata: ''
    };

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
    handleSignup = (userdata) => {
           API.doSignup(userdata)
            .then((res) => {
                if (res.data !== "err") { 
                    this.setState({
                        isLoggedIn: true,
                        message: "Signup successful, Please login again...",
                        userdata: res.data
                    });
                    this.props.history.push("/");
                }
               else {
                    this.setState({
                        isLoggedIn: false,
                        message: "Sign up failed. Try again..!!"
                    });
                }
            });
    }
    handleSubmit = (userdata) => {       
        API.doLogin(userdata)
            .then((res) => {
            console.log(res);
                if (res.data !== "err") {
                    this.setState({
                        isLoggedIn: true,
                        message: "",
                        userdata: res.userdata
                    });
                   localStorage.setItem('user123', res.userdata.username);
                    this.props.history.push("/welcome");
                } else {
                    var a=this.state;
                    a.isLoggedIn = false;
                    a.message = "Wrong username or password. Try again..!!";
                    this.setState(a);
                }
            });
    };

    handleLogout = () => {
        console.log('logout called');
        API.logout()
            .then((status) => {
                if(status === 200){
                    this.setState({
                        isLoggedIn: false
                    });
                    this.props.history.push("/");
                }
            });
    };


    render() {

        return (

            <div className="container-fluid">
                <Route exact path="/" render={() => (
                    <div>
            <div>
                        <Login handleSubmit={this.handleSubmit}
                               />
                        <Message message={this.state.message}/>
                    </div>
                        <button className="btn btn-success" onClick={() => {
                            this.props.history.push("/signup");
                        }}>
                            Signup
                        </button>
                    </div>
                )}/>

                <Route exact path="/login" render={() => (
                    <div>
                        <Login handleSubmit={this.handleSubmit}
                      />

                    </div>
                )}/>


                <Route exact path="/signup" render={() => (
                    <div>
                        <SignUp handleSignup={this.handleSignup} />
                        
                    </div>
                )}/>
                <Route exact path="/welcome" render={() => (
                    <Welcome handleLogout={this.handleLogout} handlehost1={this.handlehost1}
                             handlehost2={this.handlehost2}
                             handlehost3={this.handlehost3}
                                 userdata={this.state.userdata} isLoggedIn={this.state.isLoggedIn}
                             />

                    )}/>

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

        );
    }
}

export default withRouter(NewerHomePage);