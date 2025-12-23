function runAnalysis() {
  const freq = {};

  DRAW_DATA.forEach(draw => {
    draw.numbers.forEach(num => {
      freq[num] = (freq[num] || 0) + 1;
    });
  });

  const sorted = Object.entries(freq)
    .sort((a,b) => b[1] - a[1]);

  document.getElementById("frequency").innerHTML =
    sorted.map(([n,c]) => `${n} → ${c}`).join("<br>");
}
