export function task1(input: string) {
  const [a1, a2, n] = input.split(" ").map((i) => Number(i));
  const a = [a1, a2];

  for (let i = 1; i < n; i++) {
    if (i > 1) {
      a[i] = a[i - 1] + a[i - 2];
    }
  }

  return a[n - 1];
}

const result = task1("1 2 5");

console.log("Result for task 1:", result);
