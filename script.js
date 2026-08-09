const SITE_CONFIG = {
  contactUrl: "https://calendly.com/dr-jarkkomoilanen/new-meeting",
  demoIframeUrl: "",
  standardsUrl: "https://opendataproducts.org"
};

const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-navigation");

document.querySelectorAll("[data-config-link='contact']").forEach((link) => {
  link.setAttribute("href", SITE_CONFIG.contactUrl);
});

document.querySelectorAll("[data-config-link='standards']").forEach((link) => {
  link.setAttribute("href", SITE_CONFIG.standardsUrl);
});

if (SITE_CONFIG.demoIframeUrl) {
  const iframe = document.querySelector("[data-demo-iframe]");
  const video = document.querySelector("[data-video-shell] video");

  if (iframe && video) {
    iframe.src = SITE_CONFIG.demoIframeUrl;
    iframe.hidden = false;
    video.hidden = true;
  }
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    body.classList.toggle("nav-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      body.classList.remove("nav-open");
    }
  });
}
