// Task 5: Traverse a 2D Array - Print column-wise reverse
let arr=[[1,2,3],[4,5,6],[7,8,9]] ;
for(let j = 0 ; j<arr[0].length ; j++){
  for(let i =arr.length-1 ;i>=0 ; i--){
    console.log(arr[j][i]) ;
  }
}