const fs = require('fs');
const tweets = require('../tweets.json');
 
const jsonData = `const data = ` + JSON.stringify(tweets) + `; \n\n export default data;`;

fs.writeFile("./src/data.js", jsonData, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("data file has been saved as data.js!");
});