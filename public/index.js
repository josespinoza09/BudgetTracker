if ("serviceWorker" in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then(() => console.log("Service Worker registered successfully."))
      .catch(error => console.log("Service Worker registration failed:", error));
  })
}
let transactions = [];
let myChart;
fetch("/api/transaction")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // save db data on global variable
    transactions = data;
    populateTotal();
    populateTable();
    populateChart();
  });
