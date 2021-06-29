export function isValidColor(value: string | null) {
  return (
    value !== null &&
    ['primary', 'secondary', 'success', 'warn', 'error'].includes(value)
  );
}
