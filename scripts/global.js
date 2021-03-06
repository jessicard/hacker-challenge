window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Welcome to the browser inspector! You are in the Console tab, which shows you JavaScript logs and errors.");
  console.log("Click the \"Elements\" tab to read the HTML.")
  console.log("Click the \"Sources\" tab to read the HTML/CSS/JavaScript source files.")
  console.log("Click the \"Application\" tab to read the local storage.")

  //
  // ---------------------------------------------------------
  // Help button functionality
  // ---------------------------------------------------------
  //

  const helpBtn = document.querySelector(".help-button");
  const helpBlurb = document.querySelector(".help-blurb");

  if (helpBtn) {
    helpBtn.addEventListener("click", event => {
      helpBlurb.classList.toggle("hidden");
      helpBtn.classList.toggle("closed");
    });
  };

  //
  // ---------------------------------------------------------
  // Network tab challenge
  // ---------------------------------------------------------
  //

  const networkPasswordSubmitBtn = document.querySelector("button.network-btn");
  const networkPasswordField = document.querySelector("input.network-password");
  const networkPassword = "wahoo"

  if (networkPasswordSubmitBtn) {
    networkPasswordSubmitBtn.addEventListener("click", event => {
      if (networkPasswordField.value == networkPassword) {
        window.location.href = "/complete.html";
      } else {
        throwError();
      };
    });
  };

  //
  // ---------------------------------------------------------
  // Press enter to submit challenge
  // ---------------------------------------------------------
  //

  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const btn = document.querySelector("button[type='submit']");
      if (btn) {
        btn.click();
      }
    }
  });
});

// Form error handling
let errorTimer;

function throwError() {
  clearTimeout(errorTimer);

  document.querySelector(".error").classList.remove("hidden");

  errorTimer = setTimeout(() => {
    document.querySelector(".error").classList.add("hidden");
  }, 3000);
}
