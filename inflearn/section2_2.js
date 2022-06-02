//visible student: inflearn/javascript/section2_2 Complete
const { stdin, stdout, exit } = require('process');
let readline = require('readline');

let rl = readline.createInterface({
    input:stdin,
    output:stdout,
});
let num = 0;
let c = 0;
let str = '';
rl.on('line',(line)=>{
    num = parseInt(line);
    if(c++>0)
    {
        str = line;
        rl.close();
    }
});

rl.on('close',()=>{
    let max = 0;
    let cnt = 0;
    str = str.split(' ').map(e=>parseInt(e));
    for(let i of str)
        if(i > max){
            max = i;
            cnt++
        }
    console.log(cnt);
    exit();
})
