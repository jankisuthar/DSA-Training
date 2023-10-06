// Task 8: Rotate By 90
let arr=[[1,2,3,4],
         [5,6,7,8],
         [1,2,3,4],
         [5,6,7,8]] ;

for(let j = arr[0].length ; j>=0 ; j--){
  let ar2=[] ;
  for(let i =0 ;i<arr.length ; i++){
    ar2.push(arr[i][j]) ;
  }
  console.log(ar2)
}
