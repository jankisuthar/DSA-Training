//   Task 12: Print the elements without the border
let arr=[[1,2,3],[4,5,6],[7,8,9]] ;

for(let i =0 ; i<arr.length ; i++){
  for(let j= 0 ; j<arr[0].length ; j++){
    if(i==0||j==0 ||j==arr.length-1 ||i==arr.length-1){
      continue ;
    }else{
      console.log(arr[i][j])
    }
  }
}