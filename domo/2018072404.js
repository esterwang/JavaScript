//删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组

function deleteFirstElement(arr, item) {
  
    var newArr;
    var newArr = arr.concat();
    newArr.shift();
    return newArr;
}
