const usedDongIDs = new Set();

// get reference to button
const dongJoke = document.getElementById("getDong");
// add event listener for the button, for action "click"
dongJoke.addEventListener("click", showDongJoke);
function showDongJoke() {
  $.getJSON( '..\\data\\ding_dong.json', function(dongData) {
    const randomDong = dongData[Math.floor(Math.random() * dongData.length)];
    if (!usedDongIDs.has(randomDong.id)) {
      usedDongIDs.add(randomDong.id);
      const dongJoke = `
      Ding Dong!<br>
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
  });
}
function addDongJoke() {
  const dongJoke = `
  Ding Dong!<br>
  Who's there?<br>
  ${document.getElementById("whosThere").value}<br>
  ${document.getElementById("whosThere").value} who?<br>
  ${document.getElementById("who").value}`;
  document.getElementById("addDongStatus").innerHTML = dongJoke;

  $.getJSON('..\\data\\ding_dong.json', function (dongData) {
    dongData.push({
      id: (dongData.length + 1).toString(),
      whos_there: document.getElementById("whosThere").value,
      who: document.getElementById("who").value
    });
    console.log(dongData);
    // fs.writeFile('..\\data\\knock_knock.json', JSON.stringify(dongData), err => {
    //   if (err) {
    //     console.log("Error writing file", err)
    //   } else {
    //     console.log('JSON data is written to the file successfully')
    //   }
    // });
  });
}
