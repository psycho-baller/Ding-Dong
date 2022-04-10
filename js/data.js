const CSVtoJSON = require('csvtojson');
//const JSONtoCSV = require('json2csv').parse;
const fs = require('fs');


function getJson(fileName) {
    CSVtoJSON().fromFile(`data\\${fileName}.csv`).then(source => {
        fs.writeFileSync(`data\\${fileName}.json`, JSON.stringify(source));
    });
}
//getJson('knock_knock');
//getJson('ding_dong');
const used_knock_ids = new Set();
// const used_dong_ids = new Set();
const data = JSON.parse(fs.readFileSync(`data\\ding_dong.json`));
function showKnockJoke() {
    const random = data[Math.floor(Math.random() * data.length)];

    if (used_knock_ids.has(random.id)) {
      showKnockJoke();
      return;
    }
    used_knock_ids.add(random.id);
    const joke = `
    Knock knock!
    Who's there?
    ${random.whos_there}
    ${random.whos_there} who?
    ${random.who}`
    console.log(joke);
}
// data.forEach(function(joke) { 
    
//     console.log(joke.id); 
// });
var x = true;
while(x) {
    if(used_knock_ids.length === data.length) {
        console.log("No more knock-knock jokes!");
        x = false;
    }else{
        showKnockJoke();
    }      
}