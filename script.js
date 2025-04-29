document.addEventListener('DOMContentLoaded', function () {
  // Auth0 Configuration
  const auth0 = new Auth0Client({
    domain: 'dev-psuyvd4jr6ro0qeg.us.auth0.com', // Your Auth0 domain
    client_id: 't5lEpCSuhw7PkOB0AG85VyW5j0xE1dJL', // Your Auth0 client ID
    redirect_uri: window.location.origin, // Redirect to the current page
  });

  // DOM Elements for Auth0
  const loginButton = document.getElementById('login-btn');
  const signupButton = document.getElementById('signup-btn');

  // Handle Login
  if (loginButton) {
    loginButton.addEventListener('click', async () => {
      await auth0.loginWithRedirect();
    });
  }

  // Handle Signup
  if (signupButton) {
    signupButton.addEventListener('click', async () => {
      await auth0.loginWithRedirect({
        screen_hint: 'signup', // Show the signup page
      });
    });
  }

  // Check Authentication on Page Load
  async function init() {
    const isAuthenticated = await auth0.isAuthenticated();

    if (isAuthenticated) {
      const user = await auth0.getUser();
      console.log('User:', user);
      alert(`Welcome, ${user.name}!`);
    }
  }

  // Initialize the App
  init();
});