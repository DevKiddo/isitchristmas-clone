'use strict'

let isitchristmas = function () {
    let dateObj = new Date();
    let month = dateObj.getMonth() + 1; //months from 1-12
    let day = dateObj.getDate();
    return month == 12 && month == 25 ? "YES" : "NO";
}

let reply = function (req, res) {
    res.render('reply', { "message": isitchristmas() });
}

let home = function (req, res) {
    res.render('home');
}


let requestHandlers = {
    home,
    reply
}

module.exports =  requestHandlers;


