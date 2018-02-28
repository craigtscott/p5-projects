function slideRow(row) {
  console.log(row);
  let arr = row.filter(val => val);
  let mis = 4 - arr.length;
  let zeros = Array(mis).fill(0);
  arr = zeros.concat(arr);
  return arr;
}

function combine(row){
  for (var i = 3; i >= 1; i--) {
    let a = row[i];
    let b = row[i-1];
    if (a === b && a !== 0) {
      row[i] = a + b;
      row[i-1] = 0;
    }
  }
  return row;
}
