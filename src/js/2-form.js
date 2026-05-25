const form = document.querySelector('.feedback-form');

var prevData = JSON.parse(localStorage.getItem('feedback-form-state'));

var formData = { email: '', message: '' };
if (prevData) formData = { email: prevData.email, message: prevData.message };

form.querySelector('input').value = formData.email;
form.querySelector('textarea').value = formData.message;

form.addEventListener('input', evt => {
  if (evt.target.name == 'email') formData.email = evt.target.value;
  else formData.message = evt.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (!formData.email || !formData.message) alert('Fill please all fields');

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
});
