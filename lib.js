// it is a module 


// / function sum(a,b){
//   return a+b;
// }

// exports.sum = sum


// or 
// exports.sum = (a,b)=>{
//   return a+b;
// }


// exports.diff = (a,b)=>{
//   return a-b;
// }

// or \  we can use it as es6 syntax 
const sum = (a,b)=>{
  return a+b;
}


const diff = (a,b)=>{
  return a-b;
}

export {sum,diff}