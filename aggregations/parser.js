const fs = require('fs');

const rl = fs.createReadStream('../assignment.csv');
rl.setEncoding('utf8');

let groupByDate = new Map();
let groupByContentid = new Map();

rl.on('data', function (line) {
    const linesplit = line.split('\n');
    linesplit.forEach(function (l,n) {

        let date=linesplit[0].split(',').indexOf('date');
        let content_id=linesplit[0].split(',').indexOf('content_id');
        let time_spent=linesplit[0].split(',').indexOf('time_spent');

        let elements=l.split(",")
    if(n>0){
       if(groupByDate.has(elements[date])){
             groupByDate.set(elements[date],groupByDate.get(elements[date])+Number(elements[time_spent]));
       }
       else{
            groupByDate.set(elements[date],Number(elements[time_spent]));
       }
       
       if(groupByContentid.has(elements[content_id])){
            groupByContentid.set(elements[content_id],groupByContentid.get(elements[content_id])+Number(elements[time_spent]));
        }
        else{
            groupByContentid.set(elements[content_id],Number(elements[time_spent]));
        }
    }
    }
    )
    console.log('Grouping by date: ',groupByDate)
    console.log('Grouping by content_id:',groupByContentid)
})

