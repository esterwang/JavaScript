//1.打平嵌套数组 [1, [2, [3], 4], 5] => [1, 2, 3, 4, 5]
//**思路1：**用 *forEach()*方法遍历数组，用 *typeOf()* 检查每一个元素数据类型是否是number，
        //若是，则跳过，若不是，则用其他方法读取元素并插入数组中间（因为数组可能多层嵌套，所以可以用上递归调用）
        //【太复杂了，然后我放弃了】
//**思路2：**用join()方法把嵌套数组变成字符串，再用split()方法把字符串分割成数组，
        //最后把数组元素的数据类型从字符串强行转换成数组，就OK了。。我也不想相信，可以浏览器运行出来结果真的是对的。。

function noNesting(arr){
   var str = arr.join();
   arr = str.split(",");
for(var i=0;i < arr.length;i++){
   arr[i] = Number(arr[i]);
}
   return arr;
}
