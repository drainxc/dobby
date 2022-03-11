export function fillZero(num: number): string {
  return 10 <= num ? `${num}` : "0" + `${num}`;
}
