fs = require('fs');
const { execSync } = require("child_process");




let git_item_name = null;

const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question('Enter git item name: ', ans => {
    git_item_name = ans;

    function myFunction1() {
        return execSync('git add .', (err, stdout, stderr) => {
            // handle err, stdout & stderr
        });
    }
    function myFunction2() {
        return execSync(`git commit -a -m "${git_item_name}"`, (err, stdout, stderr) => {
            // handle err, stdout & stderr
        });
    }
    
    function myFunction3() {
        return execSync(`git push`, (err, stdout, stderr) => {
            // handle err, stdout & stderr
        });
    }
      
    
    /////test1/////
    myFunction1();
    myFunction2();
    myFunction3();
    

    
    
    // fs.writeFile('prod_hash.txt', git_item_name, function (err) {
    //     if (err) return console.log(err);
    //     console.log('Hello World > helloworld.txt');
    // });




    rl.close();
});


