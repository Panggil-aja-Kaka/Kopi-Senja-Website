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

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/
// Duplicate Image to Make the Animation Work
  const tracks = document.querySelectorAll('.testimonials__content')
  
  tracks.forEach(track => {
    const cards = [...track.children] //Spread to Make a Static Copy
    
    //Duplicate Cards Only Once
    for (const card of cards) {
      track.appendChild(card.cloneNode(true))
    }
  })
  