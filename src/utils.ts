export const pipe = (...fns: Function[]) => (x) =>
  fns.reduce((y, f) => f(y), x);

export const map = (fn) => (elements: []) => elements.map(fn);

export const forEach = (fn) => (elements: []) => elements.forEach(fn);

export const plusN = (inc: number) => (n: number) => n + inc;

export const plusOne = plusN(1);

export const generateNElements = (elements: number) =>
  Array.from(Array(elements).keys());

export const printResult = (e: string | number) => console.log(e);
