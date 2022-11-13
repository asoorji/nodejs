const fs = require('fs');

var readme = fs.readFileSync('readme.txt', 'utf8');

fs.writeFileSync('writeme.txt', readme)
