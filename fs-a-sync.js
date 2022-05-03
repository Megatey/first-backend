const {readFile, writeFile} = require('fs')

readFile('./contents/first.txt', 'utf8', (err, result) => {
if(err){
    console.log(err);
    return
}
console.log(result)
readFile('./contents/second.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
        console.log(result);
        writeFile('./contents/asyncFile.txt', 'This is a new File for asynchorousFile', (err, result) => {
            if(err){
                console.log(err);
                return
            }
            console.log(result);
})
})
})
