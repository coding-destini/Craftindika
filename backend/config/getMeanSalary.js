// Helper function to calculate mean
 function calculateMean(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return Math.round(sum / arr.length);
  }

  module.exports = calculateMean;