'use strict'

let isitchristmas = function(){
    let dateObj = new Date();
    let month = dateObj.getMonth() + 1; //months from 1-12
    let day = dateObj.getDate();
    return month == 12 && month == 25 ? "YES" : "NO";
}

let home = function(req, res){
    res.render('home', {"message" : isitchristmas()});
}

module.exports.home = home;


