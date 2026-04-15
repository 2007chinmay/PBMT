function goTo(page) {
  window.location.href = page;
}

const jobs = JSON.parse(localStorage.getItem("pbmtJobs")) || [];

document.getElementById("totalJobs").innerText = jobs.length;

// Monthly calculation
const now = new Date();
let total = 0;
let count = 0;

jobs.forEach(job => {
  const d = new Date(job.workDoneDate);
  if (d.getMonth() === now.getMonth()) {
    total += job.amount;
    count++;
  }
});

document.getElementById("monthly").innerText = "₹" + total;
document.getElementById("jobCount").innerText = count + " jobs";

document.getElementById("date").innerText = new Date().toDateString();
