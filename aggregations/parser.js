const fs = require('fs');

const rl = fs.createReadStream('../assignment.csv');
rl.setEncoding('utf8');

let myMap = new Map();
let myMap1 = new Map();

rl.on('data', function (line) {
    const linesplit = line.split('\n');
    linesplit.forEach(function (l,n) {

        let date=linesplit[0].split(',').indexOf('date');
        let content_id=linesplit[0].split(',').indexOf('content_id');
        let time_spent=linesplit[0].split(',').indexOf('time_spent');

        let elements=l.split(",")
    if(n>0){
       if(myMap.has(elements[date])){
             myMap.set(elements[date],myMap.get(elements[date])+Number(elements[time_spent]));
       }
       else{
            myMap.set(elements[date],Number(elements[time_spent]));
       }
       
       if(myMap1.has(elements[content_id])){
            myMap1.set(elements[content_id],myMap1.get(elements[content_id])+Number(elements[time_spent]));
        }
        else{
            myMap1.set(elements[content_id],Number(elements[time_spent]));
        }
    }
    }
    )
    console.log('Grouping by date: ',myMap)
    console.log('Grouping by content_id:',myMap1)
})

