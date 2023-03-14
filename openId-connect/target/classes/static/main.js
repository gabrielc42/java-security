const unauthenticatedDiv = document.getElementById('unauthenticated');
const authenticatedDiv = document.getElementById('authenticated');
const userNameSpan = document.getElementById('user');

async function getUserName() {
  const response = await fetch('/api/user/name');
  const data = await response.json();

  if (data.name) {
    authenticatedDiv.style.display = 'block';
    unauthenticatedDiv.style.display = 'none';
    userNameSpan.innerHTML = data.name;
  }
}

getUserName();