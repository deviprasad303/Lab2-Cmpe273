
var Mocha = require("mocha");
var http=require("http");

var mocha = new Mocha({
    ui: "bdd",
    reporter: "spec"
});
//const describe= require('mocha').describe;
// Create a new test suite for our Bank Account
const assert = require('assert');
describe('server check', function(){it('check if server is connecting', function(done){http.get('http://localhost:3001/', function(res) {assert.equal(200, res.statusCode);done();})});});

describe('Filecheck', function(){it(
    'check if filenames exist for a username',
    function(done){http.get('http://localhost:3001/getgroups?sharee=Ramu', function(res) {assert.equal(200, res.statusCode);done();})});});

describe('Filecheck', function(){it(
    'check if filenames exist for a username',
    function(done){http.get('http://localhost:3001/getgroups?sharee=abc@gmail.com', function(res) {assert.equal(200, res.statusCode);done();})});});

describe('Filecheck', function(){it(
    'check if filenames exist for a username',
    function(done){http.get('http://localhost:3001/getstarfiles/Ramu', function(res) {assert.equal(200, res.statusCode);done();})});});

describe('Filecheck', function(){it(
    'check if filenames exist for a username',
    function(done){http.get('http://localhost:3001/getstarfiles/abc@gmail.com', function(res) {assert.equal(200, res.statusCode);done();})});});

describe('server check', function(){it('check if server is connecting', function(done){http.get('http://localhost:3001/', function(res) {assert.equal(200, res.statusCode);done();})});});

describe('Filecheck', function(){it(
    'check if filenames exist for a username',
    function(done){http.get('http://localhost:3001/getgroups?sharee=Ramu', function(res) {assert.equal(200, res.statusCode);done();})});});

describe('Filecheck', function(){it(
    'check if filenames exist for a username',
    function(done){http.get('http://localhost:3001/getgroups?sharee=abc@gmail.com', function(res) {assert.equal(200, res.statusCode);done();})});});

describe('Filecheck', function(){it(
    'check if filenames exist for a username',
    function(done){http.get('http://localhost:3001/getstarfiles/Ramu', function(res) {assert.equal(200, res.statusCode);done();})});});

describe('Filecheck', function(){it(
    'check if filenames exist for a username',
    function(done){http.get('http://localhost:3001/getstarfiles/abc@gmail.com', function(res) {assert.equal(200, res.statusCode);done();})});});










