const prepareVoteCount = (num: number | null | undefined): string => {
  if (!num) return '0';

  if (num >= 1000000) {
    return formatWithDecimal(num / 1000000) + 'M';
  } else if (num >= 1000) {
    return formatWithDecimal(num / 1000) + 'K';
  } else {
    return num.toString();
  }
};

const formatWithDecimal = (value: number) => {
  const rounded = Math.round(value * 10) / 10;

  return rounded % 1 === 0 ? rounded.toString() : rounded.toFixed(1);
};

export default prepareVoteCount;
