function renderJobs() {
  const jobs = JSON.parse(localStorage.getItem("pbmtJobs")) || [];
  const search = document.getElementById("search").value.toLowerCase();

  const container = document.getElementById("jobList");
  container.innerHTML = "";

  const filtered = jobs.filter(j =>
    j.productName.toLowerCase().includes(search) ||
    j.clientName.toLowerCase().includes(search) ||
    j.description.toLowerCase().includes(search)
  );

  if (filtered.length === 0) {
    container.innerHTML = "<p>No jobs found</p>";
    return;
  }

  filtered.forEach(job => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${job.productName}</h3>
      <p>${job.clientName}</p>
      <p>₹${job.amount}</p>
      <p>${job.workDoneDate}</p>

      <button onclick="deleteJob('${job.id}')">Delete</button>
    `;

    container.appendChild(div);
  });
}

function deleteJob(id) {
  let jobs = JSON.parse(localStorage.getItem("pbmtJobs")) || [];
  jobs = jobs.filter(j => j.id !== id);
  localStorage.setItem("pbmtJobs", JSON.stringify(jobs));
  renderJobs();
}

renderJobs();
