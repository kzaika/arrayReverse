const fs = require('fs');

let arr = [
    [0,10,0,10,0,10,0,10,0,10],
    [0,20,0,20,0,20,0,20,0,20],
    [0,30,0,30,0,30,0,30,0,30],
    [0,40,0,40,0,40,0,40,0,40],
    [0,50,0,50,0,50,0,50,0,50],
    [0,60,0,60,0,60,0,60,0,60],
    [0,70,0,70,0,70,0,70,0,70],
    [0,80,0,80,0,80,0,80,0,80],
    [0,90,0,90,0,90,0,90,0,90],
    [0,11,0,11,0,11,0,11,0,11],
]

const stream = fs.createWriteStream('arr.txt');

stream.once('open', () => {
    arr.forEach(subArr => stream.write(JSON.stringify([...subArr].reverse()) + '\n'))
    stream.end();
    console.log('Saved!')
});

