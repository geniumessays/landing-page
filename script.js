document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;

  if (email) {
      const data = { email: email };

      const PROXY = 'https://cors-anywhere.herokuapp.com/';
      // const URL = 'https://script.google.com/macros/s/AKfycbwb0C7EUCles7MDxMd-bDbAw79xxrsBH5yBnONLNcsi3e4eEwlQWUqiS8PePJtUeOac/exec';
      const URL = 'https://script.google.com/macros/s/AKfycbzn9K8x-UsIoCgHe-gExuWnPz5yLiRmnZ0QNouVGMx4ssP2odOe_otgO6iOaQghv1fm/exec';


      // Send to Google Sheets via Google Apps Script endpoint
      fetch(PROXY + URL, {
          // redirect: 'follow',
          method: 'POST',
          // mode: 'cors',
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json',
              // 'Referrer-Policy': 'no-referrer'  // Explicitly set referrer policy

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
