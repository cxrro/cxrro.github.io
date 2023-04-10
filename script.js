const imageBoxes = document.querySelectorAll('.image-box');

const imageCycles = {
  category1: ['category1-img1.jpg', 'category1-img2.jpg', 'category1-img3.jpg'],
  category2: ['category2-img1.jpg', 'category2-img2.jpg', 'category2-img3.jpg'],
  // Add more categories with their image arrays using the same format
};

imageBoxes.forEach((imageBox) => {
  imageBox.addEventListener('click', () => {
    const category = imageBox.dataset.category;
    const img = imageBox.querySelector('img');
    const currentImageIndex = imageCycles[category].indexOf(img.src.split('/').pop());
    const nextImageIndex = (currentImageIndex + 1) % imageCycles[category].length;
    img.src = imageCycles[category][nextImageIndex];
  });
});
