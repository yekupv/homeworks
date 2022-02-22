function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  if(arr1.length != arr2.length) return false 
  let index = 0
	result = arr1.every((currentValue) => currentValue === arr2[index++])

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  const filteredArray = arr.filter(currentValue => currentValue > 0 && currentValue % 3 == 0 );
  resultArr = filteredArray.map((currentValue) => currentValue * 10)

  return resultArr; // array
}
