export const formatUnixTimestamp = (
  timestamp: any,
  isUTC: boolean = false,
): string => {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

  // Get hours and minutes based on whether it's UTC or local time
  let hours = isUTC ? date.getUTCHours() : date.getHours();
  const minutes = isUTC ? date.getUTCMinutes() : date.getMinutes();

  // Determine AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12; // Convert '0' to '12'

  // Return formatted time
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
};

// Example usage with OpenWeatherMap sunrise timestamp
const sunriseTimestamp = 1728873592; // Replace with the actual timestamp from OpenWeatherMap

// Convert to UTC time
const sunriseUTC = formatUnixTimestamp(sunriseTimestamp, true);
console.log("Sunrise Time (UTC):", sunriseUTC);

// Convert to local time (Eastern Time)
const sunriseLocal = formatUnixTimestamp(sunriseTimestamp, false);
console.log("Sunrise Time (Local):", sunriseLocal);
