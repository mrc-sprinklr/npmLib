function toss() {
  const getRandom = (limit) => Math.round(Math.random() * limit);

  let [result, n] = [getRandom(100), getRandom(10)];
  for (let i = 0; i < n; i++) result += getRandom(getRandom(1000));

  return result % 2 ? "head" : "tail";
}

module.exports = toss;
