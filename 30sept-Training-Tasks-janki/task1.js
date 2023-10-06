// ## Task 1: Remove Duplicates from an Array 

let array=[3, 4, 5, 2, 3, 4, 5, 6] ;
let obj={} ;
for(let i = 0 ;i<array.length ; i++){
  let char=array[i] ;
  if(obj[char]==undefined){
    obj[char]=1 ;
  }else{
    obj[char]+=1 ;
  }
}

for(let key in obj){
  console.log(key)
}