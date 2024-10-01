export default function createIteratorObject(report) {
  const values = Object.values(report.allEmployees);
  let allEmployees = [];
  for (const item of values) {
    allEmployees = [...allEmployees, ...item];
  }

  return {
    index: -1,
    next() {
      this.index += 1;
      return {
        value: allEmployees[this.index],
        done: this.index >= allEmployees.length,
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
