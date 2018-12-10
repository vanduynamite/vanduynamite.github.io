

document.addEventListener("DOMContentLoaded", () => {
  const mutubePic = document.getElementById('mutube-pic');
  const kukulkanPic = document.getElementById('kukulkan-pic');

  mutubePic.onmouseover = mutubeToGif;
  mutubePic.onmouseleave = mutubeToPng;
  kukulkanPic.onmouseover = kukulkanToGif;
  kukulkanPic.onmouseleave = kukulkanToPng;
});

const kukulkanToGif = (e) => e.target.setAttribute('src', './assets/kukulkan.gif');
const kukulkanToPng = (e) => e.target.setAttribute('src', './assets/kukulkan.png');
const mutubeToGif = (e) => e.target.setAttribute('src', './assets/mutube.gif');
const mutubeToPng = (e) => e.target.setAttribute('src', './assets/mutube.png');
