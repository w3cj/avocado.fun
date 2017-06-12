const button = document.querySelector('button');
const avocadoSFW = document.querySelector('#sfw');
const avocadoNSFW = document.querySelector('#nsfw');

button.addEventListener('click', () => {
  if(button.textContent == 'NSFW MODE') {
    button.textContent = 'SFW MODE';
    avocadoSFW.style.display = 'none';
    avocadoNSFW.style.display = '';
  } else {
    button.textContent = 'NSFW MODE';
    avocadoSFW.style.display = '';
    avocadoNSFW.style.display = 'none';
  }
});
