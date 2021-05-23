const crypto = require('crypto');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}) 

readline.question('Enter the passcode my sun: \n', passcode => {
    const hash = crypto.createHash('sha256').update(passcode).digest('hex');
    console.log('\nHere is your hash: ' + hash);
})
