const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
const form = document.querySelector('#merit-form');
const blessing = document.querySelector('#blessing');
form?.addEventListener('submit', event => {
  event.preventDefault();
  blessing.hidden = false;
  blessing.scrollIntoView({behavior: 'smooth', block: 'center'});
});
