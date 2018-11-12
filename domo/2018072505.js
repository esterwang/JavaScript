//构造一个函数`func(str)`,将该字符串倒置并返回
  //- 例如:
    //func('asdfgh')  //hgfdsa
    //func('apple')  //elppa

function func(str) {
	var arr = str.split();
	arr.reverse();
	return arr.join("");
}
