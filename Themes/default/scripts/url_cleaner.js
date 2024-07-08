// Function to remove URL parameters
function removeUrlParameters() {
  // Check if this is the first load
  if (sessionStorage.getItem('pageLoaded') !== 'true') {
      var currentUrl = window.location.href;
      var urlParts = currentUrl.split('?');
      
      // Check if there are any query parameters
      if (urlParts.length > 1) {
          // Remove query parameters
          var newUrl = urlParts[0];
          
          // Update the URL without reloading the page
          window.history.replaceState({}, document.title, newUrl);
          
          // Reload the page to ensure all SMF scripts run correctly with the new URL
          window.location.href = newUrl;
      }
      
      // Set the flag in sessionStorage
      sessionStorage.setItem('pageLoaded', 'true');
  }
}

// Run the function when the page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', removeUrlParameters);
} else {
  removeUrlParameters();
}