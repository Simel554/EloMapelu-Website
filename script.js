// Real focus areas drawn from his public advocacy work.
const workAreas = [
  { tag: "Community Advocacy", title: "Henzo Kenya", desc: "Founding member and Chairman — a community organization uniting leukemia and GIST patients for support and public awareness." },
  { tag: "Policy & Coordination", title: "KENCO", desc: "Chairman of the Kenyan Network of Cancer Organizations, the national umbrella body coordinating cancer NGOs and advocacy groups." },
  { tag: "Program Coordination", title: "The Max Foundation", desc: "Program Coordinator working to ensure cancer patients have access to medication and care." },
  { tag: "Regional Advocacy", title: "Acute Leukemia Advocates Network", desc: "Contributing to regional advocacy efforts connecting patient voices across East Africa." }
];

const background = [
  "Public Policy & Administration, Kenyatta University",
  "Diploma in Pharmacy",
  "Former Secretary General, Kenya Pharmaceutical Association"
];

function renderWork() {
  const grid = document.getElementById("workGrid");
  grid.innerHTML = workAreas.map(w => `
    <div class="card">
      <span class="card-tag">${w.tag}</span>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </div>
  `).join("");
}

function renderBackground() {
  const list = document.getElementById("backgroundList");
  list.innerHTML = background.map(b => `<li>${b}</li>`).join("");
}

function setYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderWork();
  renderBackground();
  setYear();
});