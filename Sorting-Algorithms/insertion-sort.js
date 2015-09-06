var exmp=[2,4,7,1,5,3];

function insertionSort(arr){
  for(var j=1; j<arr.length; j++){
    var key = arr[j];
    var i = j -1;
    while(i>-1 && arr[i] > key){
      arr[i+1] = arr[i];
      i--;
    }
    arr[i+1] = key;
  }

  return arr;
}

console.log(insertionSort(exmp));
