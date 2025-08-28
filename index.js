//copy button
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      let number = btn.getAttribute("data-number");
      navigator.clipboard.writeText(number);
      alert(`Copied: ${number}`);
    });
  });
  //call button
  document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      let number = btn.getAttribute("data-number");
      alert(`Calling ${number}...`);
    });
  });

});
