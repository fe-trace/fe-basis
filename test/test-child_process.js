const { spawn } = require('child_process');
const ls = spawn('node', ['-v']);
// const ls = spawn('ipconfig');
const buffer = [];

ls.stdout.on('data', function(data) {
    console.log('stdout: ', data);
    buffer.push(data);
});

ls.stderr.on('data', function(data) {
    console.log('stderr: ', data);
});

ls.on('close', function(code) {
    console.log('exit: ', code);
    console.log(buffer.toString('utf-8'));
});

ls.on('error: ', function(error) {
    console.log("error: ", error);
});