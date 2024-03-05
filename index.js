console.log('bobbyhadz.com');

const img = document.getElementById('img');

img.addEventListener('error', function handleError() {
  console.log(img.src);
  // 👇️ if set to non-existent image, causes infinite loop
  // img.src = 'backup.webp'; // 👈️ must be a valid image
});
