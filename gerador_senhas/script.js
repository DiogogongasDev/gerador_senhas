function generatePassword() {
  const length = document.getElementById('length').value;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
  let password = '';

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * characters.length);
    password += characters[random];
  }

  document.getElementById('passwordResult').textContent = password;
}
