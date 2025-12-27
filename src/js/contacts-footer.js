'use strict';

const userForm = document.querySelector('.user-form-section-contacts');

const userData = {
  userName: '',
  userEmail: '',
  userComments: '',
};

const saveData = localStorage.getItem('userFormData');

if (saveData) {
  const parsedData = JSON.parse(saveData);

  userData.userName = parsedData.userName || '';
  userData.userEmail = parsedData.userEmail || '';
  userData.userComments = parsedData.userComments || '';

  userForm.elements.name.value = parsedData.userName || '';
  userForm.elements.email.value = parsedData.userEmail || '';
  userForm.elements.comments.value = parsedData.userComments || '';
}

userForm.addEventListener('input', handleInput);

function handleInput(event) {
  const form = event.currentTarget;

  userData.userName = form.elements.name.value.trim();
  userData.userEmail = form.elements.email.value.trim();
  userData.userComments = form.elements.comments.value.trim();

  localStorage.setItem('userFormData', JSON.stringify(userData));

  console.log(userData);
}

userForm.addEventListener('submit', handleSubmite);

function handleSubmite(event) {
  event.preventDefault();
  if (
    userForm.elements.name.value === '' ||
    userForm.elements.email.value === '' ||
    userForm.elements.comments.value === ''
  ) {
    alert('fill all fealdse please ');
    return;
  }

  if (!userForm.elements.email.value.includes('@')) {
    return;
  }

  localStorage.removeItem('userFormData');

  userData.userName = '';
  userData.userEmail = '';
  userData.userComments = '';

  userForm.reset();
}
