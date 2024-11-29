const Utils = {
  calculateNumber: (type, a, b) => {
    const numA = Math.round(a);
    const numB = Math.round(b);
    if (type === 'SUM') {
      return (numA + numB);
    } else if (type === 'SUBTRACT') {
      return numA - numB;
    } else if (type === 'DIVIDE') {
      if (!numB) {
        return 'Error';
      }
      return numA / numB;
    }
    return 'Error';
  },
}

module.exports = Utils;
