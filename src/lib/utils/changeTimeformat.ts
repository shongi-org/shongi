export function formatTime(time: string) {
  const timeStr = time?.toString().padStart(4, '0'); // Ensure 4-digit format
  const hours = parseInt(timeStr?.substring(0, 2), 10);
  const minutes = parseInt(timeStr?.substring(2), 10);

  const period = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  return `${formattedHours}:${minutes.toString().padStart(2, '0')}${period}`;
}