function mincost(arr)
{ 
//write your code here
// return the min cost
  arr = arr.sort(function(a,b){
	  return a-b;
  });

	let result = 0;
	
	while(arr.length > 1){
		let first = arr.shift();
		let second = arr.shift();

		result += first + second;
		arr.push(first+second);
		arr.sort(function(a,b){return a-b;});
	  });
	}

	return result;
}

module.exports=mincost;
