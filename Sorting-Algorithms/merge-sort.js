var exmp=[2,4,7,1,5,3];

function mergeSort(arr){
  if(arr.length > 1){
    var n = arr.length/2;
    var l = n;
    var r = arr.length - n;

    var L = []
    for(var i=0; i<n; i++){
      L.push(arr[i]);
    }

    var R = []
    for(var j=n; j<arr.length; j++){
      R.push(arr[j]);
    }

    mergeSort(L);
    mergeSort(R);
    merge(L,R, arr)
  }

  return arr;
}

function merge(left, right, arr){
  var l = left.length;
  var r = right.length;
  var i,j,k = 0;

  while(i<l && j<r){
    if(left[i]<right[j]){
      arr[k] = left[i];
      i++
    }else{
      arr[k] = right[i];
      j++
    }
    k++
  }

  while(i<l){
    arr[k] = left[i];
    i++;
    k++;
  }

  while(j<r){
    arr[k] = right[j];
    j++;
    k++;
  }

  return arr;
}

console.log(mergeSort(exmp))
