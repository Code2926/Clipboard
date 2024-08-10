// Get the viewport width
const viewportWidth = window.innerWidth;

// Function to handle desktop view
function handleDesktopView() {
  // Add desktop-specific styles here
  console.log("Desktop view");
}

// Function to handle mobile view
function handleMobileView() {
  // Add mobile-specific styles here
  console.log("Mobile view");
}

// Check the viewport width and apply the corresponding view
if (viewportWidth >= 768) {
  handleDesktopView();
} else {
  handleMobileView();
}

// Add an event listener to handle window resize
window.addEventListener("resize", () => {
  const newViewportWidth = window.innerWidth;
  if (newViewportWidth >= 768) {
    handleDesktopView();
  } else {
    handleMobileView();
  }
});

function handleDesktopView() {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.style.display = "block";
  }