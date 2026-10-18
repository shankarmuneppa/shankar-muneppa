function chunk array (arr, size)
  let result=[];
  for (let i=0; i<arr.length; i+=size) {
    result.push (arr.slice (i, i+size));}
  return result; }
  console.log (chunk array ([1,2,3,4,5,6],2));

