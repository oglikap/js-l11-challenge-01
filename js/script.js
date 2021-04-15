const button = document.querySelector('button');
const authorSpan = document.querySelector('.author');
const imgDiv = document.querySelector('.image-container');
const img = document.querySelector('.img');

const getImage = async function () {
  const res = await fetch('https://picsum.photos/v2/list?limit=100');
  const images = await res.json();

  selectRandomImage(images);
};

const selectRandomImage = function (images) {
  let randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  // console.log(randomIndex);
  // console.log(randomImage);
  dislayImage(randomImage);
};

const dislayImage = function (randomImage) {
  const author = randomImage.author;
  const imageAddress = randomImage.download_url;
  authorSpan.textContent = author;
  img.src = imageAddress;
  imgDiv.classList.remove('hide');
};

button.addEventListener('click', function () {
  getImage();
});
