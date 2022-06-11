//extract numbers: inflearn/javascript/section3-4 Complete
const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line',(line)=>{
    let dis =(s, t, l) =>{
        // console.log(s,t,l);
        let i = 1;
        let location = parseInt(l);
    //    console.log(t,l);
       if(s[l] === t) return 0;

       while(i<s.length){
           if(s[location + i ] === t || s[location - i] === t){
                return i;
           }
           i++;
       }
       return null;

    }
   let [text, t] = line.split(' ');
   let result = []
//    console.log(text, t);
   for(let v in text)
        result.push(dis(text,t,v));

    console.log(result.join(' '));
   
//    console.log(str===reStr?"YES":"NO");
   rl.close();
});