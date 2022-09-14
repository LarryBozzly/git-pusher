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
      
    
    addFunction();
    commitFunction();
    pushFunction();
    const hash = gitLogFunction();
    const string = `${hash}${0x20}!!!${0x20}${git_item_name}`;
    
    fs.writeFile('prod_hash.txt', string, function (err) {
        if (err) return console.log(err);
    });

    rl.close();
});


