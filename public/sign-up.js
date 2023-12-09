document.addEventListener('DOMContentLoaded', () => {
  const signUpForm = document.getElementById('signup-form');

  signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Extract form data
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const race = document.getElementById('race').value;
    const birthCity = document.getElementById('birthCity').value;
    const homeCity = document.getElementById('homeCity').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      // Send POST request to server with all form data
      const response = await fetch('/api/user/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          first_name: firstName,
          last_name: lastName,
          age: age,
          race: race,
          birthCity: birthCity,
          homeCity: homeCity,
          email: email,
          password: password,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        window.location.replace('/profile');
      } else {
        console.error('Sign-up failed:', responseData.message);
        // Handle the error, show a message, etc.
      }
    
    } catch (error) {
      console.error('An error occurred during sign-up:', error);
    }
  });
});
