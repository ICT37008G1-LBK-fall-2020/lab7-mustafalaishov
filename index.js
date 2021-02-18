const axios = require('axios');

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))


axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});

//const { default: Axios } = require("axios");
//var $ = require( "jquery" );

import $ from 'jquery';

$(document).ready(function (){
    $('body').css('background-color', 'blue');
    $('body').css('opacity', '50%');
    $('p').css('font-size' , '24px');

}) 