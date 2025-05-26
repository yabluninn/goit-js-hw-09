const form = document.querySelector('.feedback-form');

const storageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(storageKey);

if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);

    if (parsedData.email) {
      form.elements.email.value = parsedData.email;
      formData.email = parsedData.email;
    }

    if (parsedData.message) {
      form.elements.message.value = parsedData.message;
      formData.message = parsedData.message;
    }
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  console.log('Form Data:', formData);

  form.reset();
  localStorage.removeItem(storageKey);
  formData.email = '';
  formData.message = '';
});
