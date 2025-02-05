document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;

  if (email) {
      const data = { email: email };
      const DOMAIN = 'geniumessays.com'

      const URL = `https://${DOMAIN}/api/join`;
      // const URL = `http://localhost:3000`;

      // Send to Google Sheets via Google Apps Script endpoint
      fetch(URL, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json',
          }
      })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Network response was not ok')
      })
      .then(data => {
          document.getElementById('confirmation-message').textContent = 'Thank you for signing up!';
          document.getElementById('confirmation-message').style.visibility = 'visible';
          document.getElementById('email').value = '';
      })
      .catch(error => {
          console.error('Error:', error);
          document.getElementById('confirmation-message').textContent = 'Oops! Something went wrong. Try again';
          document.getElementById('confirmation-message').style.visibility = 'visible';
      });
  }
});
