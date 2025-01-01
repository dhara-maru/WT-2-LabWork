const { exec } = require('child_process');

exec('echo Hello, Dhara!', (error, stdout) => console.log(stdout));

