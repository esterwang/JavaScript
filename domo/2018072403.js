//在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

function addFirstElement(arr, item) {
  
    var newArr;
    var newArr = arr.concat();
    newArr.unshift(item);
    return newArr;
}
