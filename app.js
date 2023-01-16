
var min = "2022-12-12";
var max = "2023-12-31";
var dateDay = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Friday", "Lördag", "Söndag"];




function X() {
    console.log("hellllooooo")  
}

let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;

let hej = window.document.querySelector("button");
console.log(hej);

hej.addEventListener("click", function(){
    window.open('bokning.html', 'theFrame', params);
});

function showIFrame() {
    document.querySelector('.iframe').style.display = 'block';
    document.querySelector('table').style.marginRight = "0";

}

function marginChange() {

window.document.querySelector('table').style.marginRight = "0";
}

/*hej.onclick = () => {
    window.open('/bokning.html', 'theFrame', params);
  };*/


const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('firstDialog');
const outputBox = document.querySelector('output');
const selectEl = firstDialog.querySelector('select');
const confirmBtn = firstDialog.querySelector('#confirmBtn');

// "Update details" button opens the <dialog> modally
showButton.addEventListener('click', () => {
    favDialog.showModal();
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', (e) => {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', () => {
  outputBox.value = `ReturnValue: ${favDialog.returnValue}.`;
});
  


fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));



const calendarName = odata.value.name;
const spaceNonAvailable = odata
const spaceAvailable =


