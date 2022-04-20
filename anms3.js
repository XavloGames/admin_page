var attempt = 3; // Variable to count number of attempts.
window.addEventListener("load", function() {
  // Below function Executes on submit
  document.getElementById("adminpsklgn").addEventListener("submit", function(e) {
    if (document.getElementById("adminkeyin").value.trim() !== "2376.*") {
      e.preventDefault();
      attempt--; // Decrementing by one.
      alert("Invalid Password" + (attempt > 0 ? ", Try Again!" : ""));
      // Disabling fields after 3 attempts.
      document.getElementById("adminkeyin").disabled = attempt <= 0
      document.getElementById("adminkeysmt").disabled = attempt <= 0
    }
  })
})