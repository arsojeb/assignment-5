document.addEventListener("DOMContentLoaded", function() {
  // Elements
  const heartCountEl = document.getElementById("heart-count");
  const coinCountEl = document.getElementById("coin-count");
  const copyCountEl = document.getElementById("copy-count");
  const historyListEl = document.getElementById("call-history");
  const clearHistoryBtn = document.getElementById("clear-history");


  let heartCount = parseInt(heartCountEl.textContent) || 0;
  let coinCount = parseInt(coinCountEl.textContent) || 100;
  let copyCount = parseInt(copyCountEl.textContent) || 0;
  const CALL_COST = 20;

  // Load saved call history from localStorage
  let savedHistory = JSON.parse(localStorage.getItem("callHistory")) || [];
  savedHistory.forEach(function(item) {
    const div = document.createElement("div");
    div.className = "border rounded-lg p-4 mb-4 bg-white shadow";
    div.innerHTML = `
      <p class="font-bold">Call Number: ${item.number}</p>
      <p class="text-gray-600 text-sm">Date: ${item.date}</p>
    `;
    historyListEl.prepend(div);
  });

  // COPY buttons
  const copyButtons = document.getElementsByClassName("copy-btn");
  for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function() {
      const number = this.getAttribute("data-number");
      navigator.clipboard.writeText(number)
        .then(function() {
          alert("Copied: " + number);
          copyCount++;
          copyCountEl.textContent = copyCount;
        })
        .catch(function() {
          alert("Failed to copy!");
        });
    });
  }

  // CALL buttons
  const callButtons = document.getElementsByClassName("call-btn");
  for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function() {
      const number = this.getAttribute("data-number");

      if (coinCount >= CALL_COST) {
        coinCount -= CALL_COST;
        coinCountEl.textContent = coinCount;

        alert("Calling " + number + "...");

        // create call history block
        const div = document.createElement("div");
        div.className = "border rounded-lg p-4 mb-4 bg-white shadow";
        const now = new Date().toLocaleString();
        div.innerHTML = `
          <p class="font-bold">Call Number: ${number}</p>
          <p class="text-gray-600 text-sm">Date: ${now}</p>
        `;
        historyListEl.prepend(div);

        // save to localStorage
        let history = JSON.parse(localStorage.getItem("callHistory")) || [];
        history.unshift({ number: number, date: now });
        localStorage.setItem("callHistory", JSON.stringify(history));

      } else {
        alert("Not enough coins to make a call!");
      }
    });
  }

  // HEART buttons
  const heartButtons = document.getElementsByClassName("heart-btn");
  for (let i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener("click", function() {
      heartCount++;
      heartCountEl.textContent = heartCount;
    });
  }

  // CLEAR history button
  clearHistoryBtn.addEventListener("click", function() {
    historyListEl.innerHTML = "";
    localStorage.removeItem("callHistory");
  });
});
