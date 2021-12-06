const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesGallery = document.querySelector('.gallery');

const makeImagesGallery = images.map(image => {
  return `<li> <img src="${image.url}" alt="${image.alt}" width="370"></li>`}
).join('');
console.log(makeImagesGallery);

imagesGallery.style.display.flex;

imagesGallery.insertAdjacentHTML("afterbegin", makeImagesGallery);

// const makeImagesGallery = ({ url, alt }) => {
//   const imageList = document.createElement('li');

//   const imageEl = document.createElement('img');
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = 240;

//   imageList.prepend(imageEl);
//   console.log(imageList);
//   return imageList;
// };

// const imagesList = images.map(makeImagesGallery);
// console.log(imagesList);


// imagesGallery.prepend(...imagesList);
