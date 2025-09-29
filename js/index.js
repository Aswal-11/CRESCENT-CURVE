const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  mobileMenu.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
}

menuToggle.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

AOS.init({
  duration: 800, // animation duration
  once: true, // animation only happens once
});

const caseStudies = [
  {
    title: "Our Case Studies",
    description:
      "ClickUp’s exceptional flexibility can handle any type of work.<br>And we never stop innovating.",
    status: "IN PROGRESS",
    tasksCount: 3,
    tasks: [
      { name: "Custom fields UX", color: "bg-blue-500" },
      { name: "Suggestion for Landing Page v2", color: "bg-blue-500" },
      { name: "Affiliate Referral Landing page", color: "bg-pink-400" },
    ],
  },
  {
    title: "Another Case Study",
    description: "This is another example of a case study description.",
    status: "COMPLETED",
    tasksCount: 2,
    tasks: [
      { name: "UI Redesign", color: "bg-green-500" },
      { name: "Landing Page Optimization", color: "bg-yellow-400" },
    ],
  },
  {
    title: "Marketing Case Study",
    description: "Marketing efforts analyzed and optimized for conversion.",
    status: "IN PROGRESS",
    tasksCount: 3,
    tasks: [
      { name: "SEO Audit", color: "bg-blue-500" },
      { name: "Email Campaigns", color: "bg-blue-500" },
      { name: "Referral Program", color: "bg-pink-400" },
    ],
  },
];

const grid = document.getElementById("caseStudiesGrid");

caseStudies.forEach((study) => {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow";

  card.innerHTML = `
        <h3 class="font-semibold text-lg mb-2">${study.title}</h3>
        <p class="text-gray-500 mb-4 text-sm">${study.description}</p>

        <div class="bg-indigo-50 rounded-lg p-4 space-y-3">
          <div class="flex items-center justify-between text-xs text-gray-400 mb-2">
            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">${
              study.status
            }</span>
            <span>${study.tasksCount} TASKS</span>
          </div>
          <ul class="space-y-1">
            ${study.tasks
              .map(
                (task) => `
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 ${task.color} rounded-full inline-block"></span>
                ${task.name}
              </li>
            `
              )
              .join("")}
          </ul>
        </div>
      `;

  grid.appendChild(card);
});
