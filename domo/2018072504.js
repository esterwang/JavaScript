//构造一个函数`func(str1,str2)`,**使用`substr()`方法**,判断`str1`是否以 `str2`结尾,返回`true`或`false`
  //- 例如:
    //func('an apple','apple')  //true
    //func('not an apple','le') //true

function func(str1,str2) {
	var a = str1.length;
	var b = str2.length;
	var c = a - b;
	if(str1.substr(c) == str2){
		return true;
	}
	else{
		return false;
	}
}
