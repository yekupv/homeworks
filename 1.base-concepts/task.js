function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  arr = [];
  const descriminant = b**2-4*a*c;
  if( descriminant < 0) {
    return arr;
  }
  
  if (descriminant === 0) {
    const root = -b/(2*a);
    arr.push(root);
  }
  if (descriminant > 0){
    const root1 = (-b + Math.sqrt(descriminant) )/(2*a);
    const root2 = (-b - Math.sqrt(descriminant) )/(2*a);
    arr.push(root1, root2);
  }
      
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
