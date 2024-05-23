const validateImageUrl = (url: string) => {
  if (url.endsWith('/null')) {
    return undefined;
  } else {
    return url;
  }
};

export default validateImageUrl;
