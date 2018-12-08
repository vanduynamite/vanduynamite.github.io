

document.addEventListener("DOMContentLoaded", () => {
  const mutubePic = document.getElementById('mutube-pic');

  mutubePic.onmouseover = mutubeToGif;
  mutubePic.onmouseleave = mutubeToPng;
});

const mutubeToGif = (e) => e.target.setAttribute('src', './assets/mutube.gif');
const mutubeToPng = (e) => e.target.setAttribute('src', './assets/mutube.png');
