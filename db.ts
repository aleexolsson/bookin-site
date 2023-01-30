import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/database.sqlite");

let date: string = (<HTMLInputElement>document.querySelector("#date")).value;
let time: string = (<HTMLInputElement>document.querySelector("#time")).value;
let subject: string = (<HTMLInputElement>document.querySelector("#subject"))
  .value;
let paket: string = (<HTMLInputElement>document.querySelector("#paket")).value;
let school: string = (<HTMLInputElement>document.querySelector("#school"))
  .value;
let klass: string = (<HTMLInputElement>document.querySelector("#klass")).value;
let county: string = (<HTMLInputElement>document.querySelector("#county"))
  .value;
let fname: string = (<HTMLInputElement>document.querySelector("#fname")).value;
let lname: string = (<HTMLInputElement>document.querySelector("#lname")).value;
let quantity: string = (<HTMLInputElement>document.querySelector("#quantity"))
  .value;
let mail: string = (<HTMLInputElement>document.querySelector("#mail")).value;
let phone: string = (<HTMLInputElement>document.querySelector("#number")).value;
let other: string = (<HTMLInputElement>document.querySelector("#other")).value;

export function insertHtml(
  date,
  time,
  subject,
  paket,
  school,
  klass,
  county,
  fname,
  lname,
  quantity,
  mail,
  phone,
  other
) {
  return new Promise((resolve) => {
    db.run(
      `INSERT INTO ${db}
        (date, time, subject, paket, school, klass, county, fname, lname, quantity, mail, $phone, other)
        VALUES ($date, $time, $subject, $paket, $school, $klass, $county, $fname, $lname, $quantity, $mail, $phone, $other)`,
      {
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
        $other: other,
      },
      (err) => {
        if (err) {
          resolve(err);
        } else {
          resolve("clear");
        }
      }
    );
  });
}
