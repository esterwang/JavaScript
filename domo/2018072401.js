//在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组

function addEndElement(arr, item) {
  
    var newArr = arr.concat(); //也可以把item作为参数传入concat直接加入新数组末尾 
    newArr.push(item);
    return newArr;
}
