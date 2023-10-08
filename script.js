function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*
function scrollToExperience() {
  const experienceSection = document.getElementById('experience');
  if (experienceSection) {
    experienceSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const scrollToExperienceArrow = document.getElementById('scrollToExperience');
if (scrollToExperienceArrow) {
  scrollToExperienceArrow.addEventListener('click', scrollToExperience);
}

function scrollToProjects() {
  const projectSection = document.getElementById('projects');
  if (projectSection) {
    projectSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const scrollToProjectArrow = document.getElementById('scrollToProjects');
if (scrollToProjectArrow) {
  scrollToProjectArrow.addEventListener('click', scrollToProjects);
}
*/

function scrollToExperience() {
  const experienceSection = document.getElementById('experience');
  experienceSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToProjects() {
  const projectSection = document.getElementById('projects');
  projectSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}