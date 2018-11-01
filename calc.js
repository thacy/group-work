let inputOne='';
let inputTwo='';
let result=null;
let operation=null;
let display = document.getElementById('display');

const getNumber=number =>{
	//operations
	let value;
	if (!operation && !inputTwo && ! result) {
 	value=inputOne+=number;
 } else if ( inputOne && operation && ! result){
 	value =inputTwo+=number;}
 	else if (result&& operation) {

 	}

 	inputOne = result;
 	inputTwo = "";
 	value= inputTwo += number;}

 	display.value = value;
 
}; 

const getOperation = op => {
 //set operation
 operation = op;
};
const getResult=() => {
	//perform task
 console.log( inputOne,inputTwo,result,operation);
 switch (operation) {
 	case "addButton":
 	return (display.value = result = parseInt(inputOne) + parseInt(inputTwo));
 	case "substractButton":
 	return (display.value = result = parseInt(inputOne) - parseInt(inputTwo));
 	case "multiplyButton":
 	return (display.value = result = parseInt(inputOne) * parseInt(inputTwo));
 	case "divideButton":
 	return (display.value = result = parseInt(inputOne) / parseInt(inputTwo));
 	default :
 	return null;
 }

};
const resetAll = () => {
	// set everthing to their initial values
	inputOne ="";
	inputTwo ="";


};
