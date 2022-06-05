function isDivisibleByThree(number: number): boolean {
  const sum = number
    .toString()
    .split("")
    .reduce((accumulator, current) => accumulator + Number(current), 0);

  return sum % 3 === 0;
}

function isDivisibleByEleven(number: number) {
  const sum = number
    .toString()
    .match(/(\d+?)(?=(\d{2})+(?!\d)|$)/g)
    .map(Number)
    .reduce((accumulator, current) => accumulator + current, 0);

  return sum % 11 === 0;
}

function getfizzBuzz(input: number) {
  if (isDivisibleByThree(input) && isDivisibleByEleven(input)) {
    return "fizzbuzz";
  } else if (isDivisibleByThree(input)) {
    return "fizz";
  } else if (isDivisibleByEleven(input)) {
    return "buzz";
  }

  return "baz";
}

export function task3() {
  const inputs = [2, 3, 10, 11, 12, 22, 297];

  return inputs.map((input) => getfizzBuzz(input));
}

const result = task3();

console.log("Result for task 3:", result);
