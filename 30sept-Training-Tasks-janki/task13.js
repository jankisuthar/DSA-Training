//  Task 13: Circular Traversal
let arr=[[1,2,3],[4,5,6],[7,8,9]] ;

for(let i =arr.length-1 ; i>=0 ;i--){
  console.log(arr[i][0]) ;
}
for(let i =1 ; i<arr.length ;i++){
  console.log(arr[0][i]) ;
}
for(let i =1 ; i<arr.length ;i++){
  console.log(arr[i][arr[0].length-1]) ;
}
for(let i =arr.length-2 ; i>0 ;i--){
  console.log(arr[arr.length-1][i]) ;
}