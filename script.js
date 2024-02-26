function mincost(arr)
{ 
//write your code here
// return the min cost
  arr = arr.sort(function(a,b){
	  return a-b;
  });

	while(arr.length > 1){
		let sum = arr.shift() + arr.shift();
		arr.push(sum);
		arr = arr.sort(function(a,b){
		  return a-b;
	  });
	}

	return arr[0];
}

module.exports=mincost;
