//  Task 6: Go in Zig-Zag
let arr=[[1,2,3],[4,5,6],[7,8,9]] ;

for(let i = 0 ; i<arr.length ;i++){
  if(i%2==0){
    for(let j = arr.length-1;j>=0 ; j--){
      console.log(arr[i][j]) ;
    }
  }else{
     for(let j = 0;j<arr.length ; j++){
      console.log(arr[i][j]) ;
    }
  }
}