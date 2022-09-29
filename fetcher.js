const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

request(`${args[0]}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(`${args[1]}`, body, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully

    // using body.length to get the size of the file
    // console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);

    // using fs.stat to get the size of the file
    fs.stat(`${args[1]}`, (err, stats) => {
      if (err) {
        console.error(err);
      }
      // we have access to the file stats in `stats`
      console.log(`Downloaded and saved ${stats.size} bytes to ${args[1]}`);
    });
  });
});
