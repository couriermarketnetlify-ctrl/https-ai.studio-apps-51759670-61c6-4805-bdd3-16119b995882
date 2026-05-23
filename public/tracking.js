// tracking.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const resultDiv = document.getElementById("tracking-result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const trackingNumber = form.querySelector("input").value.trim();

    // Simulated tracking logic
    if (!trackingNumber) {
      resultDiv.innerHTML = "<p>Please enter a tracking number.</p>";
      return;
    }

    // Example conditions
    if (trackingNumber === "CM12345") {
      resultDiv.innerHTML = "<p>✅ Package found and in transit.</p>";
    } else if (trackingNumber === "CM67890") {
      resultDiv.innerHTML = "<p>⚠️ Tracking locked until payment is completed.</p>";
    } else {
      resultDiv.innerHTML = "<p>❌ Tracking unavailable. No label has been created for this package.</p>";
    }
  });
});
