// Global variable
let animationRunning = false;

// Function with parameters + return
function toggleAnimation(elementId, action) {
  const element = document.getElementById(elementId);

  if (action === "start") {
    element.classList.add("animate");
    animationRunning = true;
    return "Animation started!";
  } else if (action === "stop") {
    element.classList.remove("animate");
    animationRunning = false;
    return "Animation stopped!";
  }
  return "Invalid action!";
}

// Attach event listeners
document.getElementById("startBtn").addEventListener("click", () => {
  console.log(toggleAnimation("animateBox", "start"));
});

document.getElementById("stopBtn").addEventListener("click", () => {
  console.log(toggleAnimation("animateBox", "stop"));
});

// Popup example demonstrating local scope
function showPopup() {
  let popup = document.getElementById("popup"); // local variable
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
}

document.getElementById("popupBtn").addEventListener("click", showPopup);
