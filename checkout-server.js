// use the build in mini web server in node - http
const http = require('http');

// Use the built in execSync commando that can run 
// command line/bash commands
const {execSync} = require('child_process');


// Set up a small server that only check out things if know
// the secret hash
const server = http.createServer(function (req, res) {
  res.end('Ok');
  if (req.url === '/d56e562c0606f3bbaf01dabffe8a0373410b77469763860fc1961fb64376889c'
  ) {
    // do a git pull
    execSync('git pull');
    console.log('has run git pull');
  }

  

});

// Start up the server 
 
server.listen(9876, () => console.log('Listening on http://localhost:9876'));