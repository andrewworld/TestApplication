export function filterByText(obj, text, customValues) {
  return Object.keys(obj).some(key => validate(obj, key, text, customValues));
}

function validate(obj, key, text, customValues) {
  return (
    accurate(obj[key]).includes(accurate(text)) ||
    (customValues &&
      customValues.some(value => accurate(value).includes(text.toLowerCase())))
  );
}

function accurate(text) {
  return text.toLowerCase();
}
