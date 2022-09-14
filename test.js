fs = require('fs');
const { execSync } = require("child_process");




let git_item_name = null;

const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question('Enter git item name: ', ans => {
    git_item_name = ans;

    function addFunction() {
        return execSync('git add .', (err, stdout, stderr) => {
            // handle err, stdout & stderr
        });
    }
    function commitFunction() {
        return execSync(`git commit -a -m "${git_item_name}"`, (err, stdout, stderr) => {
            // handle err, stdout & stderr
        });
    }
    
    function pushFunction() {
        return execSync(`git push`, (err, stdout, stderr) => {
            // handle err, stdout & stderr
        });
    }

    function gitLogFunction() {
        return execSync(`git log`, (err, stdout, stderr) => {
            console.log(stdout);
            // handle err, stdout & stderr
        });
    }
      
    
    addFunction();
    commitFunction();
    pushFunction();
    gitLogFunction();
    
    
    fs.writeFile('prod_hash.txt', git_item_name, function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });


    rl.close();
});


