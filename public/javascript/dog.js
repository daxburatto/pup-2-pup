async function dogFormHandler(event) {
<<<<<<< HEAD
  event.preventDefault();

  const name = document.querySelector('#dog-name').value.trim();
  const breed = document.querySelector('#dog-breed').value.trim();
  const gender = document.querySelector('#dog-gender').value.trim();
  const age = document.querySelector('#dog-age').value.trim();
  const bio = document.querySelector('#dog-bio').value.trim();
  const energy = document.querySelector('#dog-energy').value.trim();
  const patience = document.querySelector('#dog-patience').value.trim();
  const dominance = document.querySelector('#dog-dominance').value.trim();
  const weight = document.querySelector('#dog-weight').value.trim();
  const image = document.querySelector('#dog-image').value.trim();
  const user_id = document.querySelector('#user-id').value.trim();
  
    const response = await fetch('/api/dogs', {
      method: 'post',
      body: JSON.stringify({
        name,
        breed,
        gender,
        age,
        bio,
        weight,
        energy,
        patience,
        dominance,
        image,
        user_id
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  
}

document.querySelector('.dog-form').addEventListener('submit', dogFormHandler);
=======
    event.preventDefault();
  
    const name = document.querySelector('#dog-name').value.trim();
    const breed = document.querySelector('#dog-breed').value.trim();
    const gender = document.querySelector('#dog-gender').value.trim();
    const age = document.querySelector('#dog-age').value.trim();
    const bio = document.querySelector('#dog-bio').value.trim();
    const energy = document.querySelector('#dog-energy').value.trim();
    const patience = document.querySelector('#dog-patience').value.trim();
    const dominance = document.querySelector('#dog-dominance').value.trim();
    const weight = document.querySelector('#dog-weight').value.trim();
    const image = document.querySelector('#dog-image').value.trim();
  
    
      const response = await fetch('/api/dogs', {
        method: 'post',
        body: JSON.stringify({
          name,
          breed,
          gender,
          age,
          bio,
          weight,
          energy,
          patience,
          dominance,
          image
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    
  }
  
  document.querySelector('.dog-form').addEventListener('submit', dogFormHandler);
>>>>>>> hbs-page
