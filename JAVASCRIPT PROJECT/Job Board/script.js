const jobForm = document.getElementById("jobForm");
const jobContainer = document.getElementById("jobContainer");

jobForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("jobTitle").value;
  const company = document.getElementById("companyName").value;
  const description = document.getElementById("jobDescription").value;

  const job = {
    title,
    company,
    description
  };

  addJobToBoard(job);

  jobForm.reset();
});

function addJobToBoard(job) {
  const li = document.createElement("li");
  li.classList.add("job-item");

  li.innerHTML = `
    <h3>${job.title}</h3>
    <p><strong>${job.company}</strong></p>
    <p>${job.description}</p>
    <button class="apply-btn">Apply</button>
  `;

  li.querySelector(".apply-btn").addEventListener("click", () => {
    alert(`You applied for "${job.title}" at ${job.company}`);
  });

  jobContainer.appendChild(li);
}
