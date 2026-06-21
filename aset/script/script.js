// ================= HUMBERGER MENU =================
const navList = document.querySelector('.nav__list');
// Ketika Humberger di Klik
document.querySelector('#humberger-menu').onclick = () => {
  navList.classList.toggle('active');
};

// Klik di Luar Sidebar Untuk Menutup
const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click', function (e) {
  if (!humberger.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove('active')
  }
});