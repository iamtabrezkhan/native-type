module.exports = (value) => {
  const classType = Object.prototype.toString.call(value);
  const t = classType.slice(8);
  const result = t.slice(0, t.length - 1).toLowerCase();
  return result;
};
