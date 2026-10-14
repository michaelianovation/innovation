const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
document.addEventListener('keydown', event => { if(event.key === 'Escape') { closeMenu(); toggle.focus(); } });
document.addEventListener('click', event => { if(!event.target.closest('header')) closeMenu(); });
const form = document.querySelector('#contact-form');
if(form) {
 const requested = new URLSearchParams(location.search).get('objet');
 if([...form.elements.objet.options].some(option => option.value === requested)) form.elements.objet.value = requested;
 form.addEventListener('submit', event => {
  event.preventDefault();
  if(!form.reportValidity()) return;
  const data = new FormData(form);
  const label = form.elements.objet.selectedOptions[0].textContent;
  const body = `Nom : ${data.get('nom')}\nEntreprise : ${data.get('entreprise')}\nE-mail : ${data.get('email')}\n\n${data.get('message')}`;
  const emailLink = document.createElement('a');
  emailLink.href = `mailto:contact@ia-novation.fr?subject=${encodeURIComponent('Demande — '+label)}&body=${encodeURIComponent(body)}`;
  emailLink.className = 'button secondary';
  emailLink.textContent = 'Ouvrir ma messagerie ↗';
  document.querySelector('#form-status').textContent = 'Votre demande est préparée. Ouvrez votre messagerie avec le lien ci-dessous puis envoyez votre e-mail.';
  document.querySelector('#form-status').append(document.createElement('br'), emailLink);
 });
}
