module.exports = (value) => {
  const classType = Object.prototype.toString.call(value);
  const t = classType.slice(8);
  const resultString = t.slice(0, t.length - 1).toLowerCase();
  return resultString.split(" ").join("");
};
