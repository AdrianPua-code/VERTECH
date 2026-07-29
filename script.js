// ---------- Circuit trace hero background (generated SVG) ----------
(function(){
  const container = document.getElementById('pcbHero');
  const w = 1200, h = 560;
  const paths = [
    "M0,80 H220 V180 H520 V80 H900 V260",
    "M0,320 H150 V420 H480 V500 H1200",
    "M1200,60 H980 V220 H700 V340 H430",
    "M0,480 H90 V400 H260",
    "M1200,400 H1050 V300 H820"
  ];
  const nodes = [
    {x:220,y:80},{x:520,y:180},{x:900,y:80},{x:150,y:320},{x:480,y:420},
    {x:980,y:60,solder:true},{x:700,y:220},{x:430,y:340,solder:true},
    {x:90,y:480},{x:1050,y:400,solder:true},{x:820,y:300}
  ];
  let svg = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">`;
  paths.forEach((d,i)=>{
    svg += `<path class="trace-line${i%2===0?' animated':''}" d="${d}" />`;
  });
  nodes.forEach(n=>{
    svg += `<circle class="trace-node${n.solder?' solder':''}" cx="${n.x}" cy="${n.y}" r="4.5"></circle>`;
  });
  svg += `</svg>`;
  container.innerHTML = svg;
})();

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el=>io.observe(el));

// ---------- Contact form -> WhatsApp ----------
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const inputs = this.querySelectorAll('input');
  const name = inputs[0].value.trim();
  const phone = inputs[1].value.trim();
  const service = document.getElementById('serviceSelect').value;
  const message = this.querySelector('textarea').value.trim();

  const text = `Hola, soy ${name} (tel: ${phone}).%0AInterés: ${service}.%0AMensaje: ${message}`;
  const encoded = text.replace(/ /g,'%20');
  window.open(`https://wa.me/573204474231?text=${encoded}`, '_blank');
});

// ---------- Navbar background on scroll ----------
const nav = document.querySelector('.navbar-custom');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 40){
    nav.style.boxShadow = '0 4px 20px rgba(0,0,0,.35)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
