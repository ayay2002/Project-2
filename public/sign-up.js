document.addEventListener('DOMContentLoaded', () => {
  const signUpForm = document.getElementById('signup-form');

  signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Extract form data
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const age = document.getElementById('age').value;
    const race = document.getElementById('race').value;
    const birthCity = document.getElementById('birth_city').value;
    const homeCity = document.getElementById('home_city').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      // Send POST request to server with all form data
      const response = await fetch('/api/auth/signup', {
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
          birthCity: birth_city,
          homeCity: home_city,
          email: email,
          password: password,

        }),
      });

      if (response.ok) {
        // need to update to handle successful sign up
      } else {
        // need to update to handle sign up error
      }
    } catch (error) {
      console.error('An error occurred during sign-up:', error);
    }
  });
});
