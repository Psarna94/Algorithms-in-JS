var exmp=[2,4,7,1,5,3];


function partition(arr, start, end){
  var pivot = arr[end];
  var pIndex = start;

  for(var i=start; i<end-1; i++){
    if(arr[i]<pivot){

      var temp1 = arr[i];
      arr[i] = A[pIndex];
      arr[pIndex] = temp1;

      pIndex++;
    }
  }

  // swap(arr[pIndex], pivot);
  var temp2 = arr[pIndex];
  arr[pIndex] = pivot;
  pivot = temp2;

  return pIndex;
}

function quickSort(arr, str, en){

  if(str<en){
  var pIndex = partition(arr,str,en);

  quickSort(arr, str, pIndex-1);
  quickSort(arr, pIndex+1, en);
}

return arr
}

console.log(quickSort(exmp, 0,6));
