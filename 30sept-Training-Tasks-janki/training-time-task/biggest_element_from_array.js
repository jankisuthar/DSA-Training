//find the biggest element from rows
let arr=[[1,2,3],[4,5,6],[7,8,9]] ;
for(let i= 0 ; i<arr.length ; i++){
  let rbigE=0 ;
  for(let j=0 ;j<arr[0].length ; j++){
   if(arr[i][j]>rbigE){
     rbigE=arr[i][j]
   }
  }
  console.log(rbigE)
}