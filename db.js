"use strict";
exports.__esModule = true;
exports.insertHtml = void 0;
var sqlite3_1 = require("sqlite3");
var db = new sqlite3_1["default"].Database("./db/database.sqlite");
var date = document.querySelector("#date").value;
var time = document.querySelector("#time").value;
var subject = document.querySelector("#subject")
    .value;
var paket = document.querySelector("#paket").value;
var school = document.querySelector("#school")
    .value;
var klass = document.querySelector("#klass").value;
var county = document.querySelector("#county")
    .value;
var fname = document.querySelector("#fname").value;
var lname = document.querySelector("#lname").value;
var quantity = document.querySelector("#quantity")
    .value;
var mail = document.querySelector("#mail").value;
var phone = document.querySelector("#number").value;
var other = document.querySelector("#other").value;
function insertHtml(date, time, subject, paket, school, klass, county, fname, lname, quantity, mail, phone, other) {
    return new Promise(function (resolve) {
        db.run("INSERT INTO ".concat(db, "\n        (date, time, subject, paket, school, klass, county, fname, lname, quantity, mail, $phone, other)\n        VALUES ($date, $time, $subject, $paket, $school, $klass, $county, $fname, $lname, $quantity, $mail, $phone, $other)"), {
            $date: date,
            $time: time,
            $subject: subject,
            $paket: paket,
            $school: school,
            $klass: klass,
            $county: county,
            $fname: fname,
            $lname: lname,
            $quantity: quantity,
            $mail: mail,
            $phone: phone,
            $other: other
        }, function (err) {
            if (err) {
                resolve(err);
            }
            else {
                resolve("clear");
            }
        });
    });
}
exports.insertHtml = insertHtml;
