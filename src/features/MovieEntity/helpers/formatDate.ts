const formatDate = (release_date: string): string => {
  const date = new Date(release_date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
};

export default formatDate;
