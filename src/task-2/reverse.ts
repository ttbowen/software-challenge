export function reverse(strings: string[]) {
  const reversed = strings.map((string) =>
    string.split(" ").reverse().join(" ")
  );

  const replace = (string: string) =>
    string
      .split("")
      .map(() => "*")
      .join("");

  return reversed.map((string) => string.replace(/(.)\1/, replace));
}
