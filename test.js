fs = require('fs');
const { execSync } = require("child_process");




let git_item_name = null;

function myFunction1() {
    return execSync('git add .', (err, stdout, stderr) => {
        // handle err, stdout & stderr
    });
}
function myFunction2() {
    return execSync(`git commit -a -m "aaaaaa"`, (err, stdout, stderr) => {
        // handle err, stdout & stderr
    });
}

function myFunction3() {
    return execSync(`git push`, (err, stdout, stderr) => {
        // handle err, stdout & stderr
    });
}
  


myFunction1();
myFunction2();
myFunction3();

  
  


// const readline = require('readline');
// const rl = readline.createInterface({input: process.stdin, output: process.stdout});

// rl.question('Enter git item name: ', ans => {
//     git_item_name = ans;

    

    
    
//     // fs.writeFile('prod_hash.txt', git_item_name, function (err) {
//     //     if (err) return console.log(err);
//     //     console.log('Hello World > helloworld.txt');
//     // });




//     rl.close();
// });


