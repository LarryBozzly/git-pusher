fs = require('fs');
const { execSync } = require("child_process");

// log.txt


let git_item_name = null;

const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

///////////// functions //////////////////
function checkIfChanges () {
    return execSync('git status -suno').toString();
}

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

//////////////////////////

// check if there are any local changes
const changes = checkIfChanges();
if(!changes) {
    return;
}

//

rl.question('Enter git item name: ', ans => {
    git_item_name = ans;

    const previous_hash = gitLogFunction(); 
    
    addFunction(); 
    commitFunction();
    pushFunction();
    const latest_hash = gitLogFunction();

    if(previous_hash !== latest_hash && latest_hash && git_item_name) {  
        
        let string = `${latest_hash} !!! ${git_item_name}`.replace(/\n/g, ""); 
        string = '\n'+'\n'+string;
        fs.readFile('log.txt', "utf8", function (err, data) {
            if (err) throw err;
            if(data.indexOf(git_item_name) >= 0){
        
                var reg = new RegExp('\\w*' + git_item_name + '\\w*', 'gi');
                const hasArray = data.match(reg);
                let lastElement = hasArray[hasArray.length - 1];
        
                let number;
                if(lastElement.indexOf('_v') >= 0) {
                    number = +lastElement.split("_v").pop();
                    number = ++number;
                } else {
                    number = 2;
                }
        
                let logger = fs.createWriteStream('log.txt', {
                    flags: 'a' // 'a' means appending (old data will be preserved)    
                })
                logger.write(`${string}_v${number}`);
                logger.end();
            } else {
                let logger = fs.createWriteStream('log.txt', {
                    flags: 'a' // 'a' means appending (old data will be preserved)    
                })
                logger.write(`${string}`);
                logger.end();
            }
        });
    }
    
    rl.close();
});


