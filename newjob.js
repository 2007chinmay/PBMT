const qty = document.getElementById("quantity");
const price = document.getElementById("price");
const total = document.getElementById("total");

function updateTotal() {
  const q = Number(qty.value) || 0;
  const p = Number(price.value) || 0;
  total.innerText = "₹" + (q * p);
}

qty.oninput = updateTotal;
price.oninput = updateTotal;

function saveJob() {
  const job = {
    id: Date.now().toString(),
    productName: document.getElementById("productName").value,
    clientName: document.getElementById("clientName").value,
    receivedDate: document.getElementById("receivedDate").value,
    workDoneDate: document.getElementById("workDoneDate").value,
    description: document.getElementById("description").value,
    quantity: Number(qty.value),
    pricePerPiece: Number(price.value),
    amount: (Number(qty.value) || 0) * (Number(price.value) || 0),
    notes: document.getElementById("notes").value
  };

  let jobs = JSON.parse(localStorage.getItem("pbmtJobs")) || [];
  jobs.push(job);

  localStorage.setItem("pbmtJobs", JSON.stringify(jobs));

  alert("Job Saved ✅");

  window.location.href = "records.html";
}
