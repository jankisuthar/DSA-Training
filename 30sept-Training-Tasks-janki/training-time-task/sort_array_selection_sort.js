// sort the array using selecttion sort 
let arr=[7,8,9,1,2,5] ;

for(let i = 0 ;i<arr.length-1 ; i++){
  let small=i ;
  for(let j = i+1 ; j<arr.length ; j++){
    if(arr[small]>arr[j]){
      small=j ;
    }
  }
  let temp=arr[small] ;
  arr[small]=arr[i] ;
  arr[i]=temp ;
}
 console.log(arr) ;