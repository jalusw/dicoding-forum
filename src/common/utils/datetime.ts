export const getTimeSinceCreation = (date: Date) => {
  // Get the current time
  const currentTime = new Date();

  // Calculate the time difference
  const timeDifference = currentTime.getTime() - date.getTime();

  // Convert milliseconds to seconds
  const secondsDifference = Math.floor(timeDifference / 1000);

  // Calculate the time since creation
  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;

  if (secondsDifference < secondsInMinute) {
    return `${secondsDifference} seconds ago`;
  }
  if (secondsDifference < secondsInHour) {
    const minutes = Math.floor(secondsDifference / secondsInMinute);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  if (secondsDifference < secondsInDay) {
    const hours = Math.floor(secondsDifference / secondsInHour);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }

  const days = Math.floor(secondsDifference / secondsInDay);
  return `${days} day${days > 1 ? 's' : ''} ago`;
};
