fs = require('fs');
const { exec } = require('child_process');


let git_item_name = null;

const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question('Enter git item name: ', ans => {
    git_item_name = ans;

    

    exec(`
    git add .
    git commit -a -m "${git_item_name}"
    git push`, (err, stdout, stderr) => {
        console.log(err);
    // handle err, stdout & stderr
    });

    
    // fs.writeFile('prod_hash.txt', git_item_name, function (err) {
    //     if (err) return console.log(err);
    //     console.log('Hello World > helloworld.txt');
    // });




    rl.close();
});


