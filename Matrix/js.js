/**
 * 
 */
var matrixPower = 3;
var matrix = new Array(matrixPower);

for (var i = 0; i < matrixPower; i++) {
	matrix[i] = new Array(matrixPower);
}

function upperPart() {
	clear();
	for (var rowIndex = 0; rowIndex < matrixPower; rowIndex++) {
		for (var colIndex = 0; colIndex < matrixPower; colIndex++) {
			if (rowIndex + colIndex < matrixPower) {
				var cellId = rowIndex.toString() + colIndex.toString();
				document.getElementById(cellId).style.backgroundColor = "red";
			}
		}

	}
}

function diagonals() {
	clear();
	for (var rowIndex = 0; rowIndex < matrixPower; rowIndex++) {
		for (var colIndex = 0; colIndex < matrixPower; colIndex++) {
			if (rowIndex == colIndex || rowIndex + colIndex == matrixPower - 1) {
				var cellId = rowIndex.toString() + colIndex.toString();
				document.getElementById(cellId).style.backgroundColor = "red";
			}

		}
	}
}

function downPart() {
	clear();
	for (var rowIndex = 0; rowIndex < matrixPower; rowIndex++) {
		for (var colIndex = 0; colIndex < matrixPower; colIndex++) {
			if (rowIndex + colIndex >= matrixPower - 1) {
				var cellId = rowIndex.toString() + colIndex.toString();
				document.getElementById(cellId).style.backgroundColor = "red";
			}

		}
	}
}

function borders() {
	clear();
	for (var rowIndex = 0; rowIndex < matrixPower; rowIndex++) {
		for (var colIndex = 0; colIndex < matrixPower; colIndex++) {
			if (rowIndex == 0 || rowIndex == matrixPower - 1 || colIndex == 0
					|| colIndex == matrixPower - 1) {
				var cellId = rowIndex.toString() + colIndex.toString();
				document.getElementById(cellId).style.backgroundColor = "red";
			}

		}
	}
}

function clear() {
	for (var rowIndex = 0; rowIndex < matrixPower; rowIndex++) {
		for (var colIndex = 0; colIndex < matrixPower; colIndex++) {
			var cellId = rowIndex.toString() + colIndex.toString();
			document.getElementById(cellId).style.backgroundColor = "transparent";
		}
	}
}
