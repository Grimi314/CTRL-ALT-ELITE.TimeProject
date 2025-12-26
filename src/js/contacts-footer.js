'use strict';

const userForm = document.querySelector('.user-form-section-contacts');

userForm.addEventListener('input', handleInput);

const userData = {
  userName: '',
  userEmail: '',
  userComments: '',
};

const saveData = localStorage.getItem('userFormData');
if (saveData) {
  userData.userName = saveData.userName || '';
  userData.userEmail = saveData.userEmail || '';
  userData.userComments = saveData.userComments || '';

  userForm.elements.name.value = saveData.userName || '';
  userForm.elements.email.value = saveData.userEmail || '';
  userForm.elements.comments.value = saveData.userComments || '';
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
  event.prevetnDefault();
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
