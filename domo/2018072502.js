 //构造一个函数`func(arr)`,`str1`与`str2`都是字符串, **使用forEach()函数**比较两个字符串,
 //如果`str1`包含了`str2`中的所有字符,函数返回`true`,否则返回`false`
 //- 例如: 
    //func(["hello", "hey"])  //false,没有y
    //func(["Mary", "Army"])  //true
    
function func(arr){
    arr[0].toLocaleLowerCase();
    arr[1].toLocaleLowerCase();
	  var arrOne = arr[1].split();
	  var arrTwo = arr[0].split();
    arrOne.forEach(
      function (a){
                    var flag = 0;
                    arrTwo.forEach(
                    function (b) {
                                  if(a == b){
                                             flag++;
                                  }
                    }
                    );
                    return flag == 0 ? false : true; 
     }
   );
}

//**思路**：
//先把两个字符串都转成小写，再都分割成数组，方便数组比较。
//用forEach方法遍历数组一，在匿名函数一中遍历数组二，在匿名函数二中把数组一中的元素和数组二中的元素挨个对比，
//若有一个相同则给flag加1，只要flag不等于0，就说明数组二中有数组一中含有的这个字母。
//遍历数组一中下一个字母时flag又变为0,重新开始判断。
