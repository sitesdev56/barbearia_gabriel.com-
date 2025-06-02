const imagens = document.querySelectorAll('.imagem-interativa');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Quando clicar na imagem
imagens.forEach(imagem => {
  imagem.addEventListener('click', () => {
    lightboxImg.src = imagem.src;
    lightbox.style.display = 'flex';
  });
});

// Fechar o lightbox ao clicar fora da imagem
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});

