const png = 'assets/img/sofa.png';
const gif = 'assets/img/sofa-3d.gif';

const btn360SVG = 'assets/img/btn-360.svg';
const btnCloseSVG = 'assets/img/btn-close.svg';

let imgRotation = true;

const btn360 = document.querySelector('.btn-360');
const btnImgSVG = document.querySelector('.btn-svg');
const product = document.querySelector('#product');

function toggleImg() {
  imgRotation = !imgRotation;

  imgRotation
    ? (product.src = gif) && (btnImgSVG.src = btnCloseSVG)
    : (product.src = png) && (btnImgSVG.src = btn360SVG);
}

btn360.onclick = toggleImg;