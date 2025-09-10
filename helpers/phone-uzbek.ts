export function formatUzbekPhone(raw: string): string {
  // keep only digits
  const digits = raw.replace(/\D/g, "");
  let norm = digits;

  // if they sent only the 9-digit local part, prepend country code
  if (digits.length === 9) {
    norm = "998" + digits;
  }
  // if they somehow sent a full international but not 998, grab the last 9 digits
  else if (digits.length > 9 && !digits.startsWith("998")) {
    norm = "998" + digits.slice(-9);
  }

  // now norm is exactly 12 digits: 998XXYYYYZZZ
  // format it as +998 XX YYY ZZ ZZ
  return `+${norm.slice(0, 3)} ${norm.slice(3, 5)} ${norm.slice(
    5,
    8
  )} ${norm.slice(8, 10)} ${norm.slice(10)}`;
}
