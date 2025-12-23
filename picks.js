function generatePicks() {
  const picks = [];

  while (picks.length < LOGIC_CONFIG.totalPicks) {
    let num = "";

    // force required digits
    LOGIC_CONFIG.mustIncludeDigits.forEach(d => {
      num += d;
    });

    while (num.length < LOGIC_CONFIG.numberLength) {
      const d = LOGIC_CONFIG.allowedDigits[
        Math.floor(Math.random() * LOGIC_CONFIG.allowedDigits.length)
      ];
      if (!LOGIC_CONFIG.allowRepeatDigit && num.includes(d)) continue;
      num += d;
    }

    num = num.split('').sort(() => 0.5 - Math.random()).join('');

    if (!picks.includes(num)) picks.push(num);
  }

  document.getElementById("picks").innerHTML =
    picks.map(p => `<b>${p}</b>`).join("<br>");
}
