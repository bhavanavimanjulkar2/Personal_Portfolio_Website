// Init AOS
AOS.init({ duration: 900, once: true });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(!target) return;
    e.preventDefault();
    const yOffset = -80; 
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});

    const bsCollapse = document.querySelector('.navbar-collapse');
    if(bsCollapse && bsCollapse.classList.contains('show')){
      const collapse = new bootstrap.Collapse(bsCollapse);
      collapse.hide();
    }
  });
});

const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('#navMenu .nav-link');

function onScroll() {
  const scrollPos = window.scrollY + 110;
  sections.forEach(sec => {
    if(!sec.id) return;
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const link = document.querySelector(`#navMenu .nav-link[href="#${sec.id}"]`);
    if(link){
      if(scrollPos >= top && scrollPos <= bottom){
        navLinks.forEach(n => n.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

(function(){
  const hero = document.querySelector('.hero');
  if(!hero) return;
  window.addEventListener('scroll', () => {
    if(window.innerWidth < 992) return; 
    const scrolled = window.scrollY;
    hero.style.backgroundPosition = `center ${50 - scrolled * 0.03}%`;
  });
})();

