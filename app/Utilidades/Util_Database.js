export function findName (array, key, value, prop) {
  const res = array.find((e) => e[key] === value);
  return res ? res[prop] : "";
};