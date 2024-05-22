const prepareReleaseYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];

  // The earliest film was released in 1888.
  for (let year = currentYear; year >= 1888; year--) {
    years.push(year.toString());
  }

  return years;
};

export default prepareReleaseYears;
