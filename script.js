const bulbs = document.querySelectorAll(".bulb");
const body = document.body;

function adjustColor(rgb, percent) {
  const [r, g, b] = rgb.match(/\d+/g).map(Number);

  const adjust = v =>
    Math.min(255, Math.max(0, Math.floor(v + (percent / 100) * 255)));

  return `rgb(${adjust(r)}, ${adjust(g)}, ${adjust(b)})`;
}

bulbs.forEach(bulb => {
  bulb.addEventListener("click", () => {
    bulbs.forEach(b => b.classList.remove("on"));
    bulb.classList.add("on");

    const color = getComputedStyle(bulb).backgroundColor;

    // -25 = ciemniejszy, +25 = jaśniejszy
    body.style.background = adjustColor(color, -55);
  });
});