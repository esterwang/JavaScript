//删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组;

function deleteEndElement(arr, item) {
  
    var newArr;
    var newArr = arr.concat();
    newArr.pop();
    return newArr;
}
