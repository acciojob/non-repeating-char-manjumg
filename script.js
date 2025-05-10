function firstNonRepeatedChar(str) {
  const count = {};

  // Count frequency of each character
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
}

function findFirstNonRepeat() {
  const inputStr = document.getElementById("inputStr").value.trim();
  const resultDiv = document.getElementById("result");

  if (!/^[a-z]*$/.test(inputStr)) {
    resultDiv.textContent = "Please enter only lowercase letters.";
    return;
  }

  const result = firstNonRepeatedChar(inputStr);
  resultDiv.textContent = result !== null ? `First non-repeating character: '${result}'` : "No non-repeating character found.";
}
