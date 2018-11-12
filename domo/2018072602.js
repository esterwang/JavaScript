//用js实现随机选取10~100之间的10个数字，存入一个数组，并排序。
//**思路：** 用 *math.random()* 方法生成十个随机数并存入数组 用 *sort()* 方法给数组排序

function random(){
  var arr；
  for(var i = 0; i < 10; i++){
      arr[i] = Math.floor(Math.random()*(100-10+1)+10);
  }
  arr.sort(
    fuction(a,b){
      return a-b;
    }
  );
  return arr;
}
