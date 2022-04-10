const fs = require('fs');

const usedDongIDs = new Set();
const dongData = JSON.parse(fs.readFileSync('data\\ding_dong.json', 'utf8'));

// get reference to button
const dongJoke = document.getElementById("getDong");
// add event listener for the button, for action "click"
dongJoke.addEventListener("click", showDongJoke);
function showDongJoke() {
  const randomDong = dongData[Math.floor(Math.random() * dongData.length)];
  if (!usedDongIDs.has(randomDong.id)) {
    usedDongIDs.add(randomDong.id);
    const dongJoke = `
    Knock knock!<br>
    Who's there?<br>
    ${randomDong.whos_there}<br>
    ${randomDong.whos_there} who?<br>
    ${randomDong.who}`;
    document.getElementById("dongJoke").innerHTML = dongJoke;
  } else if(usedDongIDs.size === dongData.length) {
    document.getElementById("dongStatus").innerHTML = "Oh no! we're out of ding dong jokes, feel free to add new ones";
  } else{
    showDongJoke();
  }
}
