// import { writeFile } from 'fs';
// import * as fs from 'fs';
// var fs = require('fs');
// const knockData = JSON.parse(fs.readFileSync('data\\ding_dong.json', 'utf8'));

var data;
$.getJSON('..\\data\\knock_knock.json', function(knockData) {
  data = knockData;
});

const usedKnockIDs = new Set();

// get reference to button
const knockJoke = document.getElementById("getKnock");
// add event listener for the button, for action "click"
knockJoke.addEventListener("click", showKnockJoke);
function showKnockJoke() {
    const randomKnock = data[Math.floor(Math.random() * data.length)];
    if (!usedKnockIDs.has(randomKnock.id)) {
      usedKnockIDs.add(randomKnock.id);
      const knockJoke = `
      Knock Knock!<br>
      Who's there?<br>
      ${randomKnock.whos_there}<br>
      ${randomKnock.whos_there} who?<br>
      ${randomKnock.who}`;
      document.getElementById("knockJoke").innerHTML = knockJoke;
    } else if(usedKnockIDs.size === data.length) {
      document.getElementById("knockStatus").innerHTML = "Oh no! we're out of knock-knock jokes, feel free to add new ones";
    } else{
      showKnockJoke();
    }
}

function addKnockJoke() {
  const knockJoke = `
  Knock Knock!<br>
  Who's there?<br>
  ${document.getElementById("whosThere").value}<br>
  ${document.getElementById("whosThere").value} who?<br>
  ${document.getElementById("who").value}`;
  document.getElementById("addKnockStatus").innerHTML = knockJoke;

  $.getJSON('..\\data\\knock_knock.json', function (knockData) {
    knockData.push({
      id: (knockData.length + 1).toString(),
      whos_there: document.getElementById("whosThere").value,
      who: document.getElementById("who").value
    });
    console.log(knockData);
    data = knockData;
    // fs.writeFile('..\\data\\knock_knock.json', JSON.stringify(data), err => {
    //   if (err) {
    //     console.log("Error writing file", err)
    //   } else {
    //     console.log('JSON data is written to the file successfully')
    //   }
    // });
  });
}


//   const newKnock = {
//     "id": 4 + 1,
//     "whos_there": document.getElementById("whosThere").value,
//     "who": document.getElementById("who").value
//   };
//   $.ajax({
//     url: '..\\data\\knock_knock.json',
//     type: 'PUT',
//     data: JSON.stringify(newKnock),
//     contentType: 'application/json',
//     success: function(data) {
//       console.log('success');
//     }
//   });
// }
