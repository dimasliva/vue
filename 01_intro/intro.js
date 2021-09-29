function expect(value) {
  return {
    toBe: (exp) => {
      if (value === exp) {
        console.log("Success");
      } else {
        console.error(`Value: ${value}\nBut can: ${exp}`);
      }
    },
  };
}

const sum = (x, y) => x + y;
const nullElement = () => null;

expect(sum(5, 10)).toBe(151);
