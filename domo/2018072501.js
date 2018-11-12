//构造一个函数`func(arr,x)`,使用`sort()`函数将给定的数组`arr`随机排序,并打印出该数组,以及变量`x`在该数组中的下标
//- 例如: func([1,2,3,4,5,6],5)
//- 输出: 
          //arr : [1,4,5,3,2,6]    (随机排序)
          //index : 2
          
function func(arr,x) {
  arr.sort(
    function (a, b) {
      return Math.random() > 0.5 ? -1 : 1;
    }
  );
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
  console.log(arr.indexOf(x));
}


//**随机排序：**
//方法一：[洗牌算法](https://www.w3cplus.com/javascript/shuffling-array-js.html)
//方法二：[伪随机数](https://blog.csdn.net/LVXIANGAN/article/details/73290257)
//方法三：[随机排序](https://www.jb51.net/article/81363.htm)
//**说明**：此处sort方法内调用的随机排序函数来自方法三，方法一和方法二随机性更大，函数也更复杂。
//而方法三只是随机调换相邻两个元素的值，能满足随机的要求，且函数更简洁更易理解，所以我借鉴了方法三
