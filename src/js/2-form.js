const form = document.querySelector('.feedback-form');
const textArea = form.elements.message;
const input = form.elements.email;
const localStorageKey = 'feedback-form-state';

window.addEventListener('DOMContentLoaded', () => {
  const storedData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
  textArea.value = storedData.message ?? '';
  input.value = storedData.email ?? '';
});

form.addEventListener('input', evt => {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      email: form.elements.email.value,
      message: form.elements.message.value,
    })
  );
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const emailValue = input.value.trim();
  const messageValue = textArea.value.trim();

  if (emailValue === '' || messageValue === '') {
    alert('Будь ласка, заповніть обидва поля');
    return;
  }

  console.log({
    email: emailValue,
    message: messageValue,
  });
  localStorage.removeItem(localStorageKey);
  form.reset();
});
