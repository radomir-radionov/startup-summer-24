function formatVoteCount(num: number): string {
  const fullValue = num * 1000;

  if (fullValue >= 1_000_000) {
    return Math.round(fullValue / 1_000_000) + 'M';
  } else if (fullValue >= 1_000) {
    return Math.round(fullValue / 1_000) + 'K';
  }

  return fullValue.toString();
}

export default formatVoteCount;
