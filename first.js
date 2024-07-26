
// import fs module means file stracture 

const fs = require('fs')

// this is used to measure the performance of execution 
const time = performance.now()

// this is the synchronus way of reading a file which is not ideal way, it blocks other scripts from exucution 

// const txt = fs.readFileSync('demo.txt', 'utf-8')
// console.log(txt)

// this is the assynchronus way of reading files in background without creating ny disturbance to other running scripts 
fs.readFile('demo.txt', 'utf-8',(err, txt) => {
  
  console.log(txt)

})


console.log("hello")

const time2 = performance.now()
console.log(time2 - time)