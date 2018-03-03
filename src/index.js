module.exports = function getZerosCount(number, base) {
  function getSum(a){
    baseObj = {};
    for (var i = 2; i <= a; i++) {
            if(a % i == 0){
        if(baseObj[i]){
          baseObj[i]++;
        }else{
          baseObj[i] = 1;
        }
        a /= i;
        i = 1;
            }
    }
    return baseObj;
  }
  needNum = getSum(base);
  arr = [];
   for (const value in needNum) {
        var result = 0;
        var num = number;
    while(num >= value){
      num = Math.floor( num / value );
      result += num;
    }
     arr.push( Math.floor( result / needNum[value]));
  }
  return Math.min.apply(null, arr);
}
