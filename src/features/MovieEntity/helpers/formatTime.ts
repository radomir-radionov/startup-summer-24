const formatTime = (runtime: number) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${hours}h ${formattedMinutes}m`;
};

export default formatTime;
