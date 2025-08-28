document.addEventListener("DOMContentLoaded", () => {
  const heartCountEl = document.getElementById("heart-count"); 
  const coinCountEl = document.getElementById("coin-count");   
  const clearHistoryBtn = document.getElementById("clear-history");
  const copyCountEl = document.getElementById("copy-count"); 
  const historyListEl = document.getElementById("call-history"); 

  let heartCount = parseInt(heartCountEl.textContent) || 0;
  let coinCount = parseInt(coinCountEl.textContent) || 100;
  let copyCount = parseInt(copyCountEl.textContent) || 0;
  // COPY button
document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const number = btn.getAttribute("data-number");
      navigator.clipboard.writeText(number)
        .then(() => {
          alert(`Copied: ${number}`);
          copyCount++;
          copyCountEl.textContent = copyCount;
        })
        .catch(() => alert("Failed to copy!"));
    });
  });

  // CALL button
  document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const number = btn.getAttribute("data-number");
        

      if (coinCount >= 20) {
        coinCount -= 20;
        coinCountEl.textContent = coinCount;
      } else {
        alert("Not enough coins!");
        return;
      }

      alert(`Calling ${number}...`);

      // create call history block
      const div = document.createElement("div");
      div.className = "border rounded-lg p-4 mb-4 bg-white shadow";
      div.innerHTML = `
        <p class="font-bold">Call Number: ${number}</p>
        <p class="text-gray-600 text-sm">Date: ${new Date().toLocaleString()}</p>
      `;
      historyListEl.prepend(div);
    });
  });

  // HEART button
  document.querySelectorAll(".heart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      heartCount++;
      heartCountEl.textContent = heartCount;
    });
  });

  // CLEAR history
  clearHistoryBtn.addEventListener("click", () => {
    historyListEl.innerHTML = "";
  });
});




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
