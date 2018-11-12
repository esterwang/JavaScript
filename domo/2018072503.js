 //构造一个函数`func(arr,num)`,**使用`sort()`,`slice()`,`push()`**,
 //将`arr`分成`num`大小的数组,将每一个小数组升序排序后放入同一个数组返回
  //- 例如:
    //func([1,5,4,2,3,8,7],2) 
  //输出: 
    //[[1,5],[2,4],[3,8],[7]]
  //- 例如:
    //func([1,5,4,2,3,8,7],3)
  //输出:
    //[[1,4,5],[2,3,8],[7]]
    
    
function func(arr,num) {
	var newArr;
	var j = 0;
	for(var i = 0; i < arr.length; i = i + num){
		newArr[j] = arr.slice(i,i + num  1);
		j++;
	}
	for(var k = 0; k < j, K ++){
		newArr[k].sort(
			function(a,b){
				return a - b;
			}
		)
	}
} 
