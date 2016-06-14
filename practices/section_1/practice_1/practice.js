function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var temp=[];
  for(var i in collection_a)
  for(var j in collection_b)
  {
    if(collection_a[i]==collecton_b[j])
      temp.push(collection_a[i]);
  }
  return temp;
}

module.exports = collect_same_elements;
