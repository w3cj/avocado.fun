const button = document.querySelector('button');
const avocado = document.querySelector('img');

button.addEventListener('click', () => {
  if(button.textContent == 'NSFW MODE') {
    avocado.src = 'avocado-nsfw.png';
    button.textContent = 'SFW MODE';
  } else {
    avocado.src = 'avocado-sfw.png';
    button.textContent = 'NSFW MODE';
  }
});
