const numbers = document.querySelectorAll(".number");
const result = document.querySelector(".result span");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const negative = document.querySelector(".negative");
const clear = document.querySelector(".clear");
const percent = document.querySelector(".percent");

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", (e) => {
		let atr = e.target.getAttribute("value");
		if (isFirstValue === false) {
			getFirstValue(atr);
		}
		if (isSecondValue === false) {
			getSecondValue(atr);
		}
	});
}

function getFirstValue(element) {
	result.innerHTML = "";
	firstValue += element;
	result.innerHTML = firstValue;
	firstValue = +firstValue;
}
function getSecondValue(element) {
	if (firstValue != "" && sign != "") {
		secondValue += element;
		result.innerHTML = secondValue;
		secondValue = +secondValue;
	}
}

function getOperator() {
	for (let i = 0; i < operators.length; i++) {
		operators[i].addEventListener("click", (e) => {
			sign = e.target.getAttribute("value");
			isFirstValue = true;
		});
	}
}
getOperator();
equal.addEventListener("click", () => {
	result.innerHTML = "";
	switch (sign) {
		case "+":
			resultValue = firstValue + secondValue;
			break;
		case "-":
			resultValue = firstValue - secondValue;
			break;
		case "x":
			resultValue = firstValue * secondValue;
			break;
		case "/":
			resultValue = firstValue / secondValue;
			break;
	}
	result.innerHTML = resultValue;
	firstValue = resultValue;
	secondValue = "";
	checkResultLenght();
});
negative.addEventListener("click", () => {
	console.log("negative");
	result.innerHTML = "";
	if (firstValue != "") {
		resultValue = -firstValue;
		firstValue = resultValue;
	}
	if (firstValue != "" && secondValue != "" && sign != "") {
		resultValue = -resultValue;
	}
	result.innerHTML = resultValue;
});
percent.addEventListener("click", () => {
	console.log("percent");
	result.innerHTML = "";
	if (firstValue != "") {
		resultValue = firstValue / 100;
		firstValue = resultValue;
	}
	if (firstValue != "" && secondValue != "" && sign != "") {
		resultValue = resultValue / 100;
	}
	result.innerHTML = resultValue;
});
clear.addEventListener("click", () => {
	console.log("clear");
	result.innerHTML = 0;
	firstValue = "";
	isFirstValue = false;
	secondValue = "";
	isSecondValue = false;
	sign = "";
	resultValue = 0;
});
function checkResultLenght() {
	resultValue = JSON.stringify(resultValue);
	if (resultValue.length >= 8) {
		resultValue = JSON.parse(resultValue);
		result.innerHTML = resultValue.toFixed(5);
	}
}
