//row sum
let arr=[[1,2,3],[4,5,6],[7,8,9]] ;
for(let i= 0 ; i<arr.length ; i++){
  let rSum=0 ;
  for(let j=0 ;j<arr[0].length ; j++){
    rSum+=arr[i][j] ;
  }
  console.log(rSum)
}