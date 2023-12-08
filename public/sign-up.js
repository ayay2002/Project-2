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
          age,
          race,
          birthCity,
          homeCity,
          email,
          password,
        }),
      });

      if (response.ok) {
        // Successful sign-up
        const responseData = await response.json(); // Assuming the server sends some data on success
        console.log('Sign-up successful:', responseData);

        // Optionally, you can redirect the user to another page
        window.location.href = '/login';
      } else {
        // Handle sign-up error
        const errorResponse = await response.json(); // Assuming the server sends an error message
        console.error('Sign-up error:', errorResponse.message);

        // You might want to display the error message to the user or handle it in some way
        // For example, show an alert or update a message on the page
        alert('Sign-up failed. Please check your information and try again.');
      }
    } catch (error) {
      console.error('An error occurred during sign-up:', error);
    }
  });
});
