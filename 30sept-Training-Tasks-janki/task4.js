// Task 4: Reverse Array in Sorted Order using Bubble Sort
let arr=[3, 4, 5, 6, 1, 8] ;



for(let i = 0 ;i<arr.length ; i++){
  for(let j = 0 ; j<arr.length-i-1 ; j++){
    if(arr[j]>arr[j+1]){
      let temp = arr[j] ;
      arr[j]=arr[j+1] ;
      arr[j+1]=temp ;
    }
  }
}
for(let i =arr.length-1 ; i>=0 ; i--){
  console.log(arr[i]) ;
}