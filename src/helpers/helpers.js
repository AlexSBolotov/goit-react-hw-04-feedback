export function countTotalFeedback(state) {
  const values = Object.values(state);
  return values.reduce((acc, value) => {
    return acc + value;
  }, 0);
}

export function countPositiveFeedbackPercentage(good, total) {
  return total === 0 ? 0 : Math.round((good / total) * 100);
}
