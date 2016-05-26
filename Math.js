
var array;
var i;
var sum = 0;
var mean;
var median;

function input(){
  var nums = prompt("Enter a list of whole numbers separated by commas");
  var arr =nums.split(',');
  array = arr;
}

function mean(){
  for(i=0; i < array.length; i++){
    sum += parseInt(array[i]);
  }
  mean = sum/array.length;
  window.alert("The mean is: " + mean);
  sum=0;
}

function median(){
  if(array.length%2 == 0){
    sum = parseInt(array[array.length/2 - 1]) + parseInt(array[array.length/2]);

  }
  else{
    sum = 2*array[Math.floor(array.length/2)];
  }
  median = sum/2;
  window.alert("The median is: " + median);
  sum=0;
}

function mode() {
var mode = 0;
var count = 0;
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < i; j++){
       if(array[j] === array[i]){
           mode = array[j];
           count++;
           console.log(count);
       }
    }
}
window.alert("The mode is: " + mode);
}