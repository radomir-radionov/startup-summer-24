const getVisiblePages = (currentPage: number, total: number) => {
  if (total < 3) {
    return Array.from({ length: total }, (_, i) => i + 1);
  } else if (currentPage === 1) {
    return [1, 2, 3];
  } else if (currentPage === total) {
    return [total - 2, total - 1, total];
  } else {
    return [currentPage - 1, currentPage, currentPage + 1];
  }
};

export default getVisiblePages;
