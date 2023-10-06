//find the biggest element from column
let arr=[[1,2,3],
         [4,5,6],
         [7,8,9]] ;


for(let i= 0 ; i<arr[0].length ; i++){
  let cbigE=0 ;
for(let j = 0 ; j<arr.length ; j++){
  if(arr[i][j]>cbigE){
    cbigE=arr[j][i]
  }

  }
  console.log(cbigE)
}