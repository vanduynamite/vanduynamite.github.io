

document.addEventListener("DOMContentLoaded", () => {
  const mutubePic = document.getElementById('mutube-pic');
  const kukulkanPic = document.getElementById('kukulkan-pic');
  const freecellPic = document.getElementById('freecell-pic');

  mutubePic.onmouseover = mutubeToGif;
  mutubePic.onmouseleave = mutubeToPng;
  kukulkanPic.onmouseover = kukulkanToGif;
  kukulkanPic.onmouseleave = kukulkanToPng;
  freecellPic.onmouseover = freecellToGif;
  freecellPic.onmouseleave = freecellToPng;
});

const kukulkanToGif = (e) => e.target.setAttribute('src', './assets/kukulkan.gif');
const kukulkanToPng = (e) => e.target.setAttribute('src', './assets/kukulkan.png');
const mutubeToGif = (e) => e.target.setAttribute('src', './assets/mutube.gif');
const mutubeToPng = (e) => e.target.setAttribute('src', './assets/mutube.png');
const freecellToGif = (e) => e.target.setAttribute('src', './assets/freecell.gif');
const freecellToPng = (e) => e.target.setAttribute('src', './assets/freecell.png');
