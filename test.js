fs = require('fs');
const { execSync } = require("child_process");




let git_item_name = null;

const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question('Enter git item name: ', ans => {
    git_item_name = ans;

    function addFunction() {
        return execSync('git add .')
    }
    function commitFunction() {
        return execSync(`git commit -a -m "${git_item_name}"`)
    }
    
    function pushFunction() {
        return execSync(`git push`)
    }

    function gitLogFunction() {
        return execSync(`git rev-parse HEAD`).toString();
    }
      
    const previous_hash = gitLogFunction(); 
    
    addFunction();
    commitFunction();
    pushFunction();
    const latest_hash = gitLogFunction();
    if(previous_hash !== latest_hash) {
        const string = `${latest_hash.toString()} !!! ${git_item_name}`;
        let logger = fs.createWriteStream('log.txt', {
            flags: 'a' // 'a' means appending (old data will be preserved)
        })
        logger.write(string);
        logger.end();
    }
    
    rl.close();
});


