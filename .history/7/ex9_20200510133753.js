let a = [5, 2, 0, 5, 12, 18, 1, 2, 5, 8, 10];

let max = 0;
let length = 0;

for (let i = 0; i < a.length; ++i) {
  if (a[i] > a[i - 1]) {
    length += 1;
  } else {
    length = 1;
  }
  if (length > max) {
    max = length;
  }
}

console.log(max);
