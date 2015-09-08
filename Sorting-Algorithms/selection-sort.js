function swap(a,b){
  var temp = a;
  a = b;
  b = temp;
}

function selectionSort(arr){
  for(var i=0; i<arr.length; i++){
    var iMin = i;

    for(var j=i+1; j<arr.length; j++){
      if(arr[j]<arr[iMin]){
        iMin = j;
      }
    }

    var temp = arr[i];
    arr[i] = arr[iMin];
    arr[iMin] = temp;

  }

  return arr;
}

var exmp=[2,4,7,1,5,3,9 ,34, 23, 43,34, 67, 980, 12];

console.log(selectionSort(exmp));
console.log(exmp.length);
