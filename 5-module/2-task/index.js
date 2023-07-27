function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const text = document.getElementById('text');
  let counter = false;
  button.addEventListener('click', () => {
    if (!counter) {
      text.hidden = true;
      counter = true;
    } else {
      text.hidden = false;
      counter = false;
    }
  });
}
