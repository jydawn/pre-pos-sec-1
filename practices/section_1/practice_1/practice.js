function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var temp1=[],temp2=[],result=[];
  for(var i in collection_a)
    temp1.push(collection_a[i]);
  for(var j in collection_b)
    temp2.push(collection_b[j]);
    for(var k=0;k<temp1.length;k++)
      for(var t=0;t<temp2.length;t++){
          if(temp1[i]==temp2[j])
              result.push(temp1[i]);
        
      }
  return result;
}

module.exports = collect_same_elements;
