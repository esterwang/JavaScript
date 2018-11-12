//寻找两个有序数组最小相同元素
 //a = [1, 2, 5, 9, 10]
 //b = [3, 4, 6, 9, 10]
//**思路:** 寻找到相同元素并存入一个数组，给数组排序，返回最小值

function func(arrOne,arrTwo){
    var arr;
    var i = 0;
    arrOne.forEach(
      function (a) {
         for(var j = 0; j < arrTwo.length; j++){
          if(a == arrTwo[j]){
            arr[i] = a;
            i++;
          }
        }
      }
    );
    arr.sort(
    fuction(a,b){
      return a-b;
    }
  );
}


