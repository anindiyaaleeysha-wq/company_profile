
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Membuka dan menutup menu pada HP
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Menutup menu setelah tautan dipilih
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Tahun footer diperbarui secara otomatis
document.querySelectorAll(".year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function () {
  // Menu navigasi untuk HP
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", function () {
          const isOpen = navLinks.classList.toggle("open");

          menuToggle.setAttribute("aria-expanded", String(isOpen));
          menuToggle.textContent = isOpen ? "✕" : "☰";
      });

      // Tutup menu setelah pengguna memilih halaman
      navLinks.querySelectorAll("a").forEach(function (link) {
          link.addEventListener("click", function () {
              navLinks.classList.remove("open");
              menuToggle.setAttribute("aria-expanded", "false");
              menuToggle.textContent = "☰";
          });
      });
  }

  // Tahun otomatis pada footer
  document.querySelectorAll(".current-year, .year").forEach(function (element) {
      element.textContent = new Date().getFullYear();
  });
});
