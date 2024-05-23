const prepareVoteAverage = (voteAverage: number | null | undefined): string =>
  voteAverage ? voteAverage.toFixed(1) : '0';

export default prepareVoteAverage;
