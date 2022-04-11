const usedKnockIDs = new Set();

// get reference to button
const knockJoke = document.getElementById("getKnock");
// add event listener for the button, for action "click"
knockJoke.addEventListener("click", showKnockJoke);
function showKnockJoke() {
  $.getJSON( '..\\data\\knock_knock.json', function(knockData) {
    const randomKnock = knockData[Math.floor(Math.random() * knockData.length)];

    if (!usedKnockIDs.has(randomKnock.id)) {
      usedKnockIDs.add(randomKnock.id);
      const knockJoke = `
      Knock Knock!<br>
      Who's there?<br>
      ${randomKnock.whos_there}<br>
      ${randomKnock.whos_there} who?<br>
      ${randomKnock.who}`;
      document.getElementById("knockJoke").innerHTML = knockJoke;
    } else if(usedKnockIDs.size === knockData.length) {
      document.getElementById("knockStatus").innerHTML = "Oh no! we're out of knock-knock jokes, feel free to add new ones";
    } else{
      showKnockJoke();
    }
  });
}



// Perform other work here ...

// $.getJSON("test.json", function(json) {
//   console.log(json); // this will show the info it in firebug console
// });

// // get reference to button
// var dark = document.getElementById("darkMode");
// // add event listener for the button, for action "click"
// dark.addEventListener("click", darkMode);
// function darkMode() {
//   let element = document.body;
//   element.classList.toggle("dark-mode");
