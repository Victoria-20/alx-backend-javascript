module.exports = function calculateNumber(a, b){
  const round_a = Math.round(a);
  const round_b = Math.round(b);
  return round_a + round_b;
}
