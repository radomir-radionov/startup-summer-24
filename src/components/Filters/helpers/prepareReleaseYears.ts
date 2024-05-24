const prepareReleaseYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = currentYear; year >= 1888; year--) {
    years.push(year.toString());
  }

  return years;
};

export default prepareReleaseYears;
