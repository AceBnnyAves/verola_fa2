function add(){ //Addition option
	//gets the inputs
	var no1 = Number(document.getElementById("n1").value);
	var no2 = Number(document.getElementById("n2").value);

	//Calculates the recieved inputs
	let X1 = no1 + no2;
	let X2 = Number(X1.toFixed(2));

	//Returns the output
	document.getElementById("dum_result").style.display = "none";
	document.getElementById("result").style.display = "block";
	document.getElementById("presult").style.display = "block";
	document.getElementById("presult").innerHTML = X2;
}

function sub(){ //Subtraction option
	//gets the inputs
	var no1 = Number(document.getElementById("n1").value);
	var no2 = Number(document.getElementById("n2").value);

	//Calculates the recieved inputs
	let X1 = no1 - no2;
	let X2 = Number(X1.toFixed(2));

	//Returns the output
	document.getElementById("dum_result").style.display = "none";
	document.getElementById("result").style.display = "block";
	document.getElementById("presult").style.display = "block";
	document.getElementById("presult").innerHTML = X2;
}

function mult(){ //Multiplication option
	//gets the inputs
	var no1 = Number(document.getElementById("n1").value);
	var no2 = Number(document.getElementById("n2").value);

	//Calculates the recieved inputs
	let X1 = no1 * no2;
	let X2 = Number(X1.toFixed(2));

	//Returns the output
	document.getElementById("dum_result").style.display = "none";
	document.getElementById("result").style.display = "block";
	document.getElementById("presult").style.display = "block";
	document.getElementById("presult").innerHTML = X2;
}

function div(){ //Division option
	//gets the inputs
	var no1 = Number(document.getElementById("n1").value);
	var no2 = Number(document.getElementById("n2").value);

	//Calculates the recieved inputs
	let X1 = no1/no2;
	let X2 = Number(X1.toFixed(2));

	//Returns the output
	document.getElementById("dum_result").style.display = "none";
	document.getElementById("result").style.display = "block";
	document.getElementById("presult").style.display = "block";
	document.getElementById("presult").innerHTML = X2;
}

function mod(){ //Modulus option
	//gets the inputs
	var no1 = Number(document.getElementById("n1").value);
	var no2 = Number(document.getElementById("n2").value);

	//Calculates the recieved inputs
	let X1 = no1 % no2;
	let X2 = Number(X1.toFixed(2));

	//Returns the output
	document.getElementById("dum_result").style.display = "none";
	document.getElementById("result").style.display = "block";
	document.getElementById("presult").style.display = "block";
	document.getElementById("presult").innerHTML = X2;
}