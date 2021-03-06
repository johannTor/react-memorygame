// import c from '../public/images/c.png';
// import cpp from '../public/images/cpp.png';
// import csharp from '../public/images/csharp.svg';
// import html5 from '../public/images/html5.png';
// import js from '../public/images/js.png';
// import python from '../public/images/python.png';
// import ruby from '../public/images/ruby.png';
// import ts from '../public/images/ts.png';

const imgs = ['images/c.png', 'images/cpp.png', 'images/csharp.svg', 'images/html5.png', 'images/js.png', 'images/python.png', 'images/ruby.png', 'images/ts.png'];

// To use the consistant image array for development, export displayImgs
const images = [...imgs, ...imgs];

// Returns a random integer from min up to max (not including max)
function getRandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Creating an array of image objects that we will export to the board
const displayImgs = [];
let index = 0;
for(let i = 0; i < images.length; i++) {
  if(index >= 8) {
    index = 0;
  }
  const imgObj = {'key': i, 'id': index, 'source': images[i], 'found': false, 'reveal': false};
  displayImgs.push(imgObj);
  index++;
}

// Create the randomized array
// Loop through as many times as the element count in the image list array and 'pop' a random index from the index array each iteration
// Then push an image from the images array with the random index from the indexArr
function randomizeImgOrder(list) {
  const randomizedImages = [];
  const indexArr = images.map((item, i) => i);
  for(let x = 0; x < list.length; x++) {
    const randInd = indexArr.splice(getRandInt(0, indexArr.length), 1);
    const currObj = list[randInd];
    currObj.key = x;
    randomizedImages.push(currObj);
  }
  return randomizedImages;
}

const randImgs = randomizeImgOrder(displayImgs);
// Export displayImgs for consistant img placement and comment out the randomizing loop
export {randImgs, randomizeImgOrder};