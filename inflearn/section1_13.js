// uppercase conversion: inflearn/javascript/section1-13 complete

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=>{
    let str = '';
    for(let i = 0; i < line.length;i++){
        let n = line.charCodeAt(i);
        if(65<=n && n<=90)
            str+=String.fromCharCode(line.charCodeAt(i)+32);
        else
            str+=String.fromCharCode(line.charCodeAt(i)-32);

    }
        // console.log(line.charCodeAt(i));
    console.log(str);
    rl.close();
})
rl.on('close', () =>{

    process.exit();
})