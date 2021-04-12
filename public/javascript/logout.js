async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      console.log("logout");
      document.location.replace('/logout');
    } else {
      alert(response.statusText);
    }
  }
  
<<<<<<< HEAD
  document.querySelector('#logout').addEventListener('click', logout);
  
=======
  document.querySelector('#logout').addEventListener('click', logout);
>>>>>>> hbs-page
