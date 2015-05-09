

var problem1 = function(){

	var result = 0;
	for(var i=0;i<1000;i++)
	{
		if(i%3==0 || i%5==0)
		{
			result+=i;
		}
	}
	document.getElementById("Answer1").innerHTML = "Solution : " + result;
};

var problem2 = function(){

	var result = 0;
	var i1 = 2;
	var i2 = 1;

	for(var i=3;i<4000000;i=i1+i2)
	{
		i2=i1;
		i1 = i;
		if(i%2==0)
		{
			result+=i;
		}
	}
	result+=2;
	document.getElementById("Answer2").innerHTML = "Solution : " + result;
};


var problem3 = function(){

	var result = problem3f(600851475143);

	document.getElementById("Answer3").innerHTML = "Solution : " + result;
};

var problem3f = function(nb){

	var result = 0;

	for(var i = 2;i<Math.sqrt(nb);i++)
	{
		if(nb%i==0)
		{
			if(problem3f(i)==0)
			result = i;
		}
	}
	return result;
};




