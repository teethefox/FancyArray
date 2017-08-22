function fancyarray(arr, input){
for (var i = 0; i < arr.length; i ++){
if (input == "true"){
  return(arr.reverse(arr))
}
else {
  console.log(i + input + arr[i]);
}
}
}
fancyarray([2,1,5], "=>");
