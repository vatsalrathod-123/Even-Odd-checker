function checkEvenOdd() {
  const numInput = document.getElementById("numInput").value;
  const result = document.getElementById("result");

  if (numInput === "") {
    result.textContent = "Please enter a number.";
    return;
  }

  const number = parseInt(numInput, 10);
  if (isNaN(number)) {
    result.textContent = "Invalid input. Please enter a valid number.";
    return;
  }

  if (number % 2 === 0) {
    result.textContent = `${number} is an Even Number.`;
  } else {
    result.textContent = `${number} is an Odd Number.`;
  }
}
